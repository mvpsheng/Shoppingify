import AddIcon from '@mui/icons-material/Add';
import Tab from '@mui/material/Tab';
export default function Item(props) {
  return (
    <main>
      <div className="item">
        <p>{props.value}</p>
        <Tab className='addicon' icon={<AddIcon />}/>
      </div>
    </main>
  )
}