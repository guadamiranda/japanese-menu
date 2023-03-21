import React from 'react'
import './sidebar.scss'
import { Collapse } from 'antd';
import { MdOutlineRamenDining, MdOutlineIcecream } from 'react-icons/md'
import { BiSushi, BiDrink } from 'react-icons/bi'

const { Panel } = Collapse;

interface ISidebar {
    menuItems: Array<Object>
}

export const Sidebar: React.FC<ISidebar> = ({menuItems}) => {

    const panelStyle = {
        borderBottom: '3px solid #b98357',
        fontSize: '20px',
    }

    return(
        <div className='sidebar'>
            <div className='sidebar__title'>Menu</div>
            <div className='sidebar__body'>
                <div className='sidebar__body__section'>
                    <Collapse size="small" bordered={false}>
                        <Panel header={<div className='sidebar__body__section__title'><span>Ramen<span className='tinyJapaneseSpan'>拉麺</span></span><MdOutlineRamenDining className='icon-menu'/></div>} key="1" style={panelStyle}>
                            <span>Hola</span>
                        </Panel>
                        <Panel header={<div className='sidebar__body__section__title'><span>Sushi<span className='tinyJapaneseSpan'>寿司</span></span><BiSushi className='icon-menu'/></div>} key="2" style={panelStyle}>
                            <span>Hola</span>
                        </Panel>
                        <Panel header={<div className='sidebar__body__section__title'><span>Drink<span className='tinyJapaneseSpan'>飲む</span></span><BiDrink className='icon-menu'/></div>} key="3" style={panelStyle}>
                            <span>Hola</span>
                        </Panel>
                        <Panel header={<div className='sidebar__body__section__title'><span>Dessert<span className='tinyJapaneseSpan'>デザート</span></span><MdOutlineIcecream className='icon-menu'/></div>} key="4" style={panelStyle}>
                            <span>Hola</span>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}
