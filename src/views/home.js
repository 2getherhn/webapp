import React, { useState, useEffect, useRef } from 'react';

import { buyUrl, adminRoot } from '../constants/defaultValues';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import GlideComponent from '../components/carousel/GlideComponent';
import { scroller } from 'react-scroll';
import Headroom from 'react-headroom';
import AppLayout from '../layout/AppLayout';

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    };
  }, []);

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = homeRect.x - 580 + 'px';

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX =
      event.target.innerWidth - homeRect.x - 2000 + 'px';

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  };

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return <AppLayout>Hola</AppLayout>;
};

export default Home;
