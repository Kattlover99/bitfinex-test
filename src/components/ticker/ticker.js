import React from 'react'
import { connect } from 'react-redux'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import numberWithCommas from '../../hooks/numberWithCommas'
import { TickerContainer, TickerRow, TickerBox } from './styles/ticker.styled'

const Ticker = connect(s => ({ ticker: s.ticker }))((props) => {
  const { ticker } = props
  const empty_ticker = [0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

  const [CHANNEL_ID, [BID, BID_SIZE, ASK, ASK_SIZE, DAILY_CHANGE, DAILY_CHANGE_PERC, LAST_PRICE, VOLUME, HIGH, LOW]] = Array.isArray(ticker) ? ticker : empty_ticker
  return (
    <TickerContainer>
      <TickerBox>
        <h3>BTC/USD</h3>
        <TickerRow>VOL {VOLUME && numberWithCommas(VOLUME.toFixed(2))} USD</TickerRow>
        <TickerRow>Low {LOW && numberWithCommas(LOW.toFixed(1))}</TickerRow>
      </TickerBox>

      <TickerBox>
        <h3>{LAST_PRICE && numberWithCommas(LAST_PRICE.toFixed(1))}</h3>
        <TickerRow>
          <span className={DAILY_CHANGE_PERC < 0 ? `red` : 'green'}>
            {DAILY_CHANGE && numberWithCommas(DAILY_CHANGE.toFixed(2))}
            {DAILY_CHANGE_PERC < 0 ? <FaCaretDown /> : <FaCaretUp />}
            ({DAILY_CHANGE_PERC * 100}%)</span></TickerRow>
        <TickerRow>HIGH {HIGH && numberWithCommas(HIGH.toFixed(1))}</TickerRow>
      </TickerBox>
    </TickerContainer>
  )
})


export default Ticker
