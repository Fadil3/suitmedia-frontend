import { Value } from '../../components'
import { icons } from '../../constants'
import './Values.css'

export default function ValuesModule() {
  const values = [
    {
      title: 'INNOVATIVE',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ante tortor. Aliquam aliquam massa.',
      icon: icons.lightbulb,
      color: 'rgba(233,124,111,0.9)',
      borderColor: 'rgba(233,124,111,1)',
      haveArrow: true,
    },
    {
      title: 'LOYALTY',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ante tortor. Aliquam aliquam massa.',
      icon: icons.bank,
      color: 'rgba(106,153,111,0.9)',
      borderColor: 'rgba(106,153,111,1)',
      haveArrow: true,
    },
    {
      title: 'RESPECT',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ante tortor. Aliquam aliquam massa.',
      icon: icons.balanceScale,
      color: 'rgba(85,150,194,0.9)',
      borderColor: 'rgba(85,150,194,1)',
    },
  ]
  return (
    <section className="values__container">
      <h1 className="values__title">OUR VALUES</h1>
      <div className="values__card">
        {values.map((value, index) => {
          return <Value key={value.title + index} {...value} />
        })}
      </div>
    </section>
  )
}
