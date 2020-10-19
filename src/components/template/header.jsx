import React from 'react';

import { Form, Field } from 'react-final-form';

import { Link } from 'react-router-dom';

import InputSearch from '../form/inputSearch';

// import Select from '../form/select';

const styleSearch = {
  background: 'rgba(0,0,0,0.1)',
  border: '1px solid #fff'
}

function Header() {

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <nav className={`navbar navbar-custom navbar-expand navbar-dark`}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={`/`} className={`nav-link`}>Filmes</Link>
        </li>
        <li className="nav-item">
          <Link to={`/series`} className={`nav-link`}>Séries</Link>
        </li>
      </ul>
      <ul className={`navbar-nav ml-auto`}>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} className="form-inline ml-3">
              <Field
                component={InputSearch}
                name={`pesquisar`}
                type={`search`}
                className={`form-control form-control-navbar`}
                style={styleSearch}
                placeholder={`Digite o nome do filme`}
              />
            </form>
        )}/>
      </ul>
    </nav>
  );
}

export default Header;
