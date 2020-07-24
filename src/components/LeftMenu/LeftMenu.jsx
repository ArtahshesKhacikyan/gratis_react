import React from "react";
import { fallDown as Menu } from "react-burger-menu";
import { routePaths } from "../../router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStickyNote,
  faCamera,
  faUserCheck,
  faUser,
  faMapMarked,
  faWallet,
  faChartLine,
  faBell,
  faCog,
  faStar,
  faUserCog,
  faChartPie
} from "@fortawesome/free-solid-svg-icons";
class LeftMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu pageWrapId='page-wrap' className='left-burger-menu'>
        <a id="home" className="menu-item" href={routePaths.DETAILS_ORDERS}>
          <FontAwesomeIcon icon={faStickyNote} />
          <span className='menu-span-section'>Заказы</span> </a>
        <a id="about" className="menu-item" href={routePaths.PHOTOCONTROL}>
          <FontAwesomeIcon icon={faCamera} />
          <span className='menu-span-section'>Фотоконтроль</span> </a>
        <a id="contact" className="menu-item" href="https://gratisgm.ru/admin/verification.html">
          <FontAwesomeIcon icon={faUserCheck} /> 
          <span className='menu-span-section'>Верификация</span> </a>
        <a className="menu-item" href="https://gratisgm.ru/admin/user.html">
          <FontAwesomeIcon icon={faUser} />
          <span className='menu-span-section'>Пользователи</span> </a>
        <a className="menu-item" href="https://gratisgm.ru/admin/tarif_zones.html">
          <FontAwesomeIcon icon={faMapMarked} />
          <span className='menu-span-section'>Тарифные зоны</span> </a>
        <a className="menu-item" href="https://gratisgm.ru/admin/ostatok.html">
          <FontAwesomeIcon icon={faWallet} />
          <span className='menu-span-section'>Остаток на счету</span> </a>
        <a className="menu-item" href="https://gratisgm.ru/admin/prixod-rasxod.html">
          <FontAwesomeIcon icon={faChartLine} />
          <span className='menu-span-section'>Приход / расход</span> </a>
        <a className="menu-item" href="https://gratisgm.ru/admin/notifications.html">
          <FontAwesomeIcon icon={faBell} />
          <span className='menu-span-section'>Уведомления</span> </a>
        <a className="menu-item" href="">
          <FontAwesomeIcon icon={faCog} />
          <span className='menu-span-section'>Настройки</span> </a>
        <a className="menu-item" href="">
          <FontAwesomeIcon icon={faStar} />
          <span className='menu-span-section'>Оценка/Активность</span> </a>
        <a className="menu-item" href="https://gratisgm.ru/admin/generation.html">
          <FontAwesomeIcon icon={faUserCog} />
          <span className='menu-span-section'>Поколение</span> </a>
        <a className="menu-item" href="">
          <FontAwesomeIcon icon={faChartPie} />
          <span className='menu-span-section'>Отчеты</span> </a>
      </Menu>
    );
  }
}

export default LeftMenu;
