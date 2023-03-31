import React from 'react'
import './sidebar.scss'
import { useNavigate } from 'react-router-dom';
import { Collapse } from 'antd';
import { MdOutlineRamenDining, MdOutlineIcecream } from 'react-icons/md'
import { BiSushi, BiDrink } from 'react-icons/bi'
import { VscCircleFilled } from 'react-icons/vsc'

const { Panel } = Collapse;

type Menu = {
    name: String,
    price: String,
    ingredients: Array<String>
}

interface ISidebar {
    ramens: Array<Menu>,
    sushis: Array<Menu>,
    drinks: Array<Menu>,
    desserts: Array<Menu>
}

export const SideBar: React.FC<ISidebar> = ({ramens, sushis, drinks, desserts}) => {
    const navigate = useNavigate();

    const panelStyle = {
        borderBottom: '3px solid #b98357',
        fontSize: '20px',
    }

    const navigateMenu = (menuItem) => {  
        navigate('/menu', {state: {menu: menuItem}})
    }

    return(
        <div className='sidebar'>
            <div>
                <div className='sidebar__title'>Menu</div>
                <div className='sidebar__body'>
                    <div className='sidebar__body__section'>
                        <Collapse size="small" bordered={false}>
                            <Panel header={<div className='sidebar__body__section__title'><span>Ramen<span className='tinyJapaneseSpan'>拉麺</span></span><MdOutlineRamenDining className='icon-menu'/></div>} key="1" style={panelStyle}>
                                {ramens.map((ramen) => <button onClick={() => navigateMenu(ramen)} className='sidebar__body__section__options'><VscCircleFilled className='iconOptions'/>{ramen.name}</button>)}
                            </Panel>
                            <Panel header={<div className='sidebar__body__section__title'><span>Sushi<span className='tinyJapaneseSpan'>寿司</span></span><BiSushi className='icon-menu'/></div>} key="2" style={panelStyle}>
                                {sushis.map((sushi) => <button onClick={() => navigateMenu(sushi)} className='sidebar__body__section__options' ><VscCircleFilled className='iconOptions'/>{sushi.name}</button>)}
                            </Panel>
                            <Panel header={<div className='sidebar__body__section__title'><span>Drink<span className='tinyJapaneseSpan'>飲む</span></span><BiDrink className='icon-menu'/></div>} key="3" style={panelStyle}>
                                {drinks.map((drink) => <button onClick={() => navigateMenu(drink)} className='sidebar__body__section__options' ><VscCircleFilled className='iconOptions'/>{drink.name}</button>)}
                            </Panel>
                            <Panel header={<div className='sidebar__body__section__title'><span>Dessert<span className='tinyJapaneseSpan'>デザート</span></span><MdOutlineIcecream className='icon-menu'/></div>} key="4" style={panelStyle}>
                                {desserts.map((dessert) => <button onClick={() => navigateMenu(dessert)} className='sidebar__body__section__options' ><VscCircleFilled className='iconOptions'/>{dessert.name}</button>)}  
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
            
            <span className='sidebar__body__section__credits'>Made with ❤️ by Guadalupe Miranda</span>
        </div>
    )
}