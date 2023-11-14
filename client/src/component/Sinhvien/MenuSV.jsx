import React from 'react'
import { Link } from 'react-router-dom'

const MenuSV = () => {
    return (
        <div>
            <ul>
                <Link to='page1'><li className='text-2xl text-red-500'>link 1</li></Link>
                <Link to='page2'><li className='text-2xl text-blue-500'>link 2</li></Link>
                <Link to='WriteXLRL'><li className='text-2xl text-blue-500'>danh gia</li></Link>
            </ul>
        </div>
    )
}

export default MenuSV