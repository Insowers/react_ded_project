const MonstersList = ({dataAtLoading, showMonster}) => {
    return (
        <div className='col-12 col-md-4 mt-3 mt-md-0 border rounded p-4 bg-light mt-3'>
            <p className="text-center">Weapons</p>
            <ul className="list-group">
                {dataAtLoading.length ? (dataAtLoading.map((monstersname, index) => (
                    <button onClick={()=>showMonster(monstersname.id)} key={index} className="list-group-item">{monstersname.name}</button>
                ))) : (<li className="list-group-item">No monster found</li>)}
            </ul>
        </div>
    )
}

export default MonstersList;