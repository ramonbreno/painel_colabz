import React from 'react';
import LoginImage from '../../assets/logo/colabz.png';

const LoginModule = () => {

    return (
        <div className="container bg-gradient-primary root">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-6">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <img src={LoginImage} width="85px" height="50px" />
                                        </div>
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Painel de Indicações</h1>
                                        </div>
                                        <form className="user">
                                            <div className="form-group">
                                                <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="E-mail" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Senha" />
                                            </div>
                                            <a href="./indicacoes" className="btn btn-primary btn-user btn-block">Entrar</a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="#">Esqueceu a senha?</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default LoginModule;