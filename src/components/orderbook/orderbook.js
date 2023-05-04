import React, { useEffect, useState, useCallback } from 'react'
import { wsconnect } from './ws-connect'
import { connect } from 'react-redux'
import * as Actions from './actions'
import * as TickerActions from '../ticker/actions'
import { throttle } from 'lodash'
import { MdZoomIn, MdZoomOut } from 'react-icons/md'
import numberWithCommas from '../../hooks/numberWithCommas'
import { OrderBookBar, OrderBookCol, OrderBookIcon, OrderBookPanel, OrderBookRow, OrderBookTable, OrderBookSides, OrderBookButtons, OrderBookSide, ConnectButton } from './styles/orderbook.styled'

const PRECESION = ["P0", "P1"]
const OrderBook = connect(s => (
    {
        book: s.orderbook,
    }))((props) => {
        const { book } = props
        const { bids, asks } = book

        const saveBook = useCallback(throttle((b) => props.dispatch(Actions.saveBook(b)), 500))
        const saveTicker = useCallback(throttle((b) => props.dispatch(TickerActions.saveTicker(b)), 500))

        const [precesion, setPrecision] = useState(0)
        const [scale, setScale] = useState(1.0)



        const [connectionStatus, setConnectionStatus] = useState(true)

        const startConnection = () => !connectionStatus && setConnectionStatus(true)
        const stopConnection = () => connectionStatus && setConnectionStatus(false)
        const incPrecision = () => precesion < 4 && setPrecision((precesion + 1) % PRECESION.length)

        const prec = precesion % PRECESION.length
        useEffect(() => {
            wsconnect({ book, saveBook, saveTicker, setConnectionStatus, connectionStatus })
        }, [connectionStatus])

        const _asks = asks && Object.keys(asks).slice(0, 21).reduce((acc, k, i) => {
            const total = Object.keys(asks).slice(0, i + 1).reduce((t, i) => {
                t = t + asks[i].amount
                return t
            }, 0)
            const item = asks[k]
            acc[k] = { ...item, total }
            return acc
        }, {})
        const maxAsksTotal = Object.keys(_asks).reduce((t, i) => {
            if (t < _asks[i].total) {
                return _asks[i].total
            }
            else {
                return t
            }
        }, 0)
        const _bids = bids && Object.keys(bids).slice(0, 21).reduce((acc, k, i) => {
            const total = Object.keys(bids).slice(0, i + 1).reduce((t, i) => {
                t = t + bids[i].amount
                return t
            }, 0)
            const item = bids[k]
            acc[k] = { ...item, total }
            return acc
        }, {})
        const maxBidsTotal = Object.keys(_bids).reduce((t, i) => {
            if (t < _bids[i].total) {
                return _bids[i].total
            }
            else {
                return t
            }
        }, 0)

        return (
            <div>
                <OrderBookPanel>
                    <OrderBookBar>
                        <h2>Orderbook <span>BTC/USD</span></h2>
                        <OrderBookButtons>
                            <ConnectButton onClick={incPrecision}> Precesion </ConnectButton>
                            {!connectionStatus && <ConnectButton onClick={startConnection}> Connect </ConnectButton>}
                            {connectionStatus && <ConnectButton onClick={stopConnection}> Disconnect </ConnectButton>}

                        </OrderBookButtons>
                    </OrderBookBar>
                    <OrderBookSides>
                        <OrderBookSide>
                            <h3 className="right">BIDS</h3>
                            <OrderBookTable>
                                <thead>

                                    <OrderBookRow>
                                        <OrderBookCol className="count">Count</OrderBookCol>
                                        <OrderBookCol>Amount</OrderBookCol>
                                        <OrderBookCol className="total">Total</OrderBookCol>
                                        <OrderBookCol>Price</OrderBookCol>
                                    </OrderBookRow>
                                </thead>
                                <tbody>
                                    {_bids && Object.keys(_bids).map((k, i) => {
                                        const item = _bids[k]
                                        const { cnt, amount, price, total } = item
                                        const percentage = ((total * 100) / (maxBidsTotal * scale))
                                        console.log("percentage", percentage)
                                        return (
                                            <OrderBookRow
                                                key={`book-${cnt}${amount}${price}${total}`}
                                                style={{
                                                    backgroundImage: `linear-gradient(to left, #4263ef ${percentage}%, #1b262d 0%)`
                                                }}>
                                                <OrderBookCol className="count">{cnt}</OrderBookCol>
                                                <OrderBookCol>{amount.toFixed(2)}</OrderBookCol>
                                                <OrderBookCol className="total">{total.toFixed(2)}</OrderBookCol>
                                                <OrderBookCol>{numberWithCommas(price.toFixed(prec))}</OrderBookCol>
                                            </OrderBookRow>
                                        )
                                    })}
                                </tbody>
                            </OrderBookTable>

                        </OrderBookSide>
                        <OrderBookSide>
                            <h3 className="left">ASKS</h3>
                            <OrderBookTable>
                                <thead>
                                    <OrderBookRow>
                                        <OrderBookCol>Price</OrderBookCol>
                                        <OrderBookCol className="total">Total</OrderBookCol>
                                        <OrderBookCol>Amount</OrderBookCol>
                                        <OrderBookCol className="count">Count</OrderBookCol>
                                    </OrderBookRow>
                                </thead>
                                <tbody>
                                    {_asks && Object.keys(_asks).map((k, i) => {
                                        const item = _asks[k]
                                        const { cnt, amount, price, total } = item
                                        const percentage = (total * 100) / (maxAsksTotal * scale)
                                        return (
                                            <OrderBookRow style={{
                                                backgroundImage: `linear-gradient(to right, #e56466 ${percentage}%, #1b262d 0%)`
                                            }}>
                                                <OrderBookCol>{numberWithCommas(price.toFixed(prec))}</OrderBookCol>
                                                <OrderBookCol className="total">{total.toFixed(2)}</OrderBookCol>
                                                <OrderBookCol>{amount.toFixed(2)}</OrderBookCol>
                                                <OrderBookCol className="count">{cnt}</OrderBookCol>
                                            </OrderBookRow>
                                        )
                                    })}
                                </tbody>
                            </OrderBookTable>
                        </OrderBookSide>
                    </OrderBookSides>
                </OrderBookPanel>
            </div>
        )
    })

export default OrderBook
