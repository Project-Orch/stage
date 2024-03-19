import { colors } from '@stage-lib/tokens'
import { css } from '../../styled-system/css'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div
        key={key}
        className={css({
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          gap: '1rem',
        })}
      >
        <strong className={css({ color: 'foreground.200' })}>{key}</strong>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {Object.entries(color).map(([key, color]) => (
            <div
              style={{
                backgroundColor: color.value,
                color: getContrast(color.value, '#FFF') < 3.5 ? '#000' : '#FFF',
              }}
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                width: 180,
                height: 90,
                alignItems: 'flex-end',
                p: '8px',
                borderRadius: 'lg',
                fontFamily: 'monospace',
              })}
            >
              <span>
                {key} - {color.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  })
}
