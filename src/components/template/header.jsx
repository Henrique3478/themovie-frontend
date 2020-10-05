import React from 'react';

import { Form, Field } from 'react-final-form';

import { Link } from 'react-router-dom';

import Input from '../form/input';

import Select from '../form/select';

function Header() {

  const onSubmit = values => {
    console.log(values)
  }

  const dataGenres = [{id: '', name: 'selecione'}]

  return (
    <nav className={`navbar navbar-custom navbar-expand navbar-dark navbar-light`}>
      <ul className="navbar-nav">
        <li className="nav-item d-none d-sm-inline-block">
          <Link to={`/`} className={`nav-link`}>Home</Link>
        </li>
      </ul>
      <ul className={`navbar-nav ml-auto`}>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} className="form-inline ml-3">
              <div className="input-group input-group-sm">
                <Field
                  component={Input}
                  name={`pesquisar`}
                  type={`text`}
                  className={`form-control form-control-navbar`}
                  placeholder={`Digite o nome do filme`}
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
        )}/>
      </ul>
    </nav>
  );
}

export default Header;
