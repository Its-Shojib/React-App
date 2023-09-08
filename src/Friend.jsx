import './box.css'
export default function Friend({friend}) {
    const {name,email} = friend;
    console.log(friend);
  return (
    <div className="box">
        <h2>Name: {name}</h2>
        <h4>Email: {email}</h4>
    </div>
  )
}
