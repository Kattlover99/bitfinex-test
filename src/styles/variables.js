const DefaultColor = {
    white: { value: '#ffffff', key: '--white', label: 'var(--white)' },
    black: { value: '#000000', key: '--black', label: 'var(--black)' },
    light: { value: '#f8f9fa', key: '--light', label: 'var(--light)' },
    dark: { value: '#343a40', key: '--dark', label: 'var(--dark)' },
    primary: { value: '#B7D5ED', key: '--primary', label: 'var(--primary)' },
    success: { value: '#28a745', key: '--success', label: 'var(--success)' },
    danger: { value: '#FF0039', key: '--danger', label: 'var(--danger)' },
    warning: { value: '#ffc107', key: '--warning', label: 'var(--warning)' },
    info: { value: '#17a2b8', key: '--info', label: 'var(--info)' },
}

const DeviceWidth = {
    mobileS: { value: '320px', key: '--mxs', label: 'var(--mxs)' },
    mobileM: { value: '375px', key: '--mxs', label: 'var(--mxs)' },
    mobileL: { value: '425px', key: '--mxs', label: 'var(--mxs)' },
    tablet: { value: '768px', key: '--mxs', label: 'var(--mxs)' },
    laptop: { value: '1024px', key: '--mxs', label: 'var(--mxs)' },
    laptopL: { value: '1440px', key: '--mxs', label: 'var(--mxs)' },
    desktop: { value: '2560px', key: '--mxs', label: 'var(--mxs)' },
}

export const device = {
    mobileS: `(max-width: ${DeviceWidth.mobileS.value})`,
    mobileM: `(max-width: ${DeviceWidth.mobileM.value})`,
    mobileL: `(max-width: ${DeviceWidth.mobileL.value})`,
    tablet: `(max-width: ${DeviceWidth.tablet.value})`,
    laptop: `(max-width: ${DeviceWidth.laptop.value})`,
    laptopL: `(max-width: ${DeviceWidth.laptopL.value})`,
    desktop: `(max-width: ${DeviceWidth.desktop.value})`,
    desktopL: `(max-width: ${DeviceWidth.desktop.value})`
};

// basic variables
const BasicVar = {
    font1: { value: 'a_RubricaXtCn', key: '--font1', label: 'var(--font1)' },
    lineH: { value: '', key: '--line-height', label: 'var(--line-height)' },
    bgBody: { value: 'radial-gradient(73.64% 92.26% at 50% 7.74%, #B7D4EC 0%, rgba(183, 212, 236, 0) 100%), #000000;', key: '--bg-body', label: 'var(--bg-body)' },
    bg: { value: '#000000', key: '--bg', label: 'var(--bg)' },
    bg2: { value: '#000000', key: '--bg2', label: 'var(--bg2)' },
    bgCard: { value: 'rgba(7, 8, 15, 0.35)', key: '--bg-card', label: 'var(--bg-card)' },
    bgOpacity: { value: 'rgba(7, 8, 15, 0.6)', key: '--bg-opacity', label: 'var(--bg-opacity)' },
    bgBadge: { value: '#FFCC00', key: '--bg-badge', label: 'var(--bg-badge)' },
    bgInput: { value: '#171C23', key: '--bg-input', label: 'var(--bg-input)' },
    color: { value: '#ffffff', key: '--color', label: 'var(--color)' },
    color2: { value: '#616A78', key: '--color2', label: 'var(--color2)' },
    color3: { value: '#ffffff88', key: '--color3', label: 'var(--color3)' },
    border: { value: '#f8f9fa', key: '--border)', label: 'var(--border))' },

    containerXPadding: { value: '3rem', key: '--container-xpadding', label: 'var(--container-xpadding)' }
}

const FontSize = {
    fSize: { value: '1.2rem', key: '--fsize', label: 'var(--fsize)' },
    fSize1: { value: '3.75rem', key: '--fsize1', label: 'var(--fsize1)' },
    fSize2: { value: '2rem', key: '--fsize2', label: 'var(--fsize2)' },
    fSize3: { value: '1.5rem', key: '--fsize3', label: 'var(--fsize3)' },
    fSize4: { value: '1.3rem', key: '--fsize4', label: 'var(--fsize4)' },
    fSize5: { value: '1rem', key: '--fsize5', label: 'var(--fsize5)' },
    fSize6: { value: '0.85rem', key: '--fsize6', label: 'var(--fsize6)' },
}

const FontSize_Sm = {
    fSize: { value: '1rem', key: '--fsize', label: 'var(--fsize)' },
    fSize1: { value: '2.7rem', key: '--fsize1', label: 'var(--fsize1)' },
    fSize2: { value: '1.8rem', key: '--fsize2', label: 'var(--fsize2)' },
    fSize3: { value: '1.3rem', key: '--fsize3', label: 'var(--fsize3)' },
    fSize4: { value: '1.1rem', key: '--fsize4', label: 'var(--fsize4)' },
    fSize5: { value: '1rem', key: '--fsize5', label: 'var(--fsize5)' },
    fSize6: { value: '0.7rem', key: '--fsize6', label: 'var(--fsize6)' },
}

// custom variables
// dashboard custom variables
export const AsideVar = {
    w: { value: '280px', key: '--aside-width', label: 'var(--aside-width)' }
}

export {
    DefaultColor,
    BasicVar,
    FontSize,
    DeviceWidth,
    FontSize_Sm
}
