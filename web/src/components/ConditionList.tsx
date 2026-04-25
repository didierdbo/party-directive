import { Fragment } from 'react'

export function ConditionList({ conditions }: { conditions: string[] }) {
  return (
    <ul>
      {conditions.length > 0
        ? conditions.map((item) => (
            <Fragment key={item}>
              <li>{item}</li>
            </Fragment>
          ))
        : 'no conditions'}
    </ul>
  )
}
