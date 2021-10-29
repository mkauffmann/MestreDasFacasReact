import React from "react";
import './UserForm.css';

function UserForm(props){
    return (
        <>
            {/* <!-- FORM INICIO  --> */}
            <div classNameName="form-container col-12 col-lg-9 my-5 card-esquerda d-none">
                <h3 className="mb-3">Editar meus dados</h3>
                <form>
                    {/* <!-- NOME inicio  --> */}
                    <div className="row">
                        <div className="col-12 mb-3">
                            <label for="nome" className="form-label custom-label">Nome completo</label>
                            <input type="text" id="nome" className="form-control" value="NOME DO USUÁRIO"/>
                        </div>
                    </div>
                     {/* <!-- NOME fim  --> */}
                     <div className="row">
                        {/* <!-- Email inicio  --> */}
                        <div className="col-6 mb-3">
                            <label for="email" className="form-label custom-label">Email</label>
                            <input type="email" id="email" className="form-control" value="EMAILDOUSUARIO@GMAIL.COM"/>
                        </div>
                        <div className="col-6 mb-3">
                            <label for="emailConfirmar" className="form-label custom-label">Confirmar Email</label>
                            <input type="email" id="emailConfirmar" className="form-control"/>
                        </div>
                    </div>
                        {/* <!-- Email fim  --> */}
                        <div className="row">
                            {/* <!-- CPF inicio  --> */}
                            <div className="col-12 col-md-6 mb-3">
                                <label for="cpf" className="form-label custom-label">CPF</label>
                                <input type="text" id="cpf" className="form-control" value="123.456.789-10"/>
                            </div>
                            {/* <!-- CPF fim --> */}
                            {/* <!-- Data de nascimento inicio  --> */}
                            <div className="col-12 col-md-6 mb-3">
                                <label for="data-nascimento" className="form-label custom-label">Data de nascimento</label>
                                <input type="date" id="data-nascimento" className="form-control" value="1985-11-11"/>
                            </div>
                            {/* <!-- Data de nascimento fim  --> */}
                        </div>
                        <div className="row">
                            {/* <!-- genero inicio  --> */}
                            <div className="col-12 col-md-6 mb-3">
                                <label for="genero" className="form-label custom-label">Gênero</label>
                                <select name="" id="genero" className="form-select">
                                    <option value="" disabled>Selecione</option>
                                    <option value="feminino">Feminino</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="nao-binario">Não Binário</option>
                                    <option value="outro">Outros</option>
                                    <option value="nd" selected>Prefiro não dizer</option>
                                </select>
                            </div>
                            {/* <!-- genero fim  --> */}
                            {/* <!-- estado civil inicio  --> */}
                            <div className="col-12 col-md-6 mb-3">
                                <label for="estado-civil" className="form-label custom-label">Estado Civil</label>
                                <select name="" id="estado-civil" className="form-select">
                                    <option value="" selected disabled>Selecione</option>
                                    <option value="solteiro">Solteiro/a</option>
                                    <option value="casado">Casado/a</option>
                                    <option value="divorciado">Divorciado/a</option>
                                    <option value="outro">Outros</option>
                                </select>
                            </div>
                            {/* <!-- estado civil fim  --> */}
                        </div>
                        <div className="row mt-3">
                            {/* <!-- telefone inicio  --> */}
                            <label for="telefone" className="form-label custom-label">Telefones</label>
                            <div className="col-12 col-md-4 mb-3">
                                <select name="" id="descricao-tel" className="form-select">
                                    <option value="" selected>Celular</option>
                                    <option value="residencia">Fixo Residência</option>
                                    <option value="trabalho">Fixo Trabalho</option>
                                    <option value="outro">Outros</option>
                                </select>
                            </div>
                            <div className="col-4 col-md-2 mb-3">
                                <input type="text" id="ddd" className="form-control" value="11"/>
                            </div>
                            <div className="col-8 col-md-6 mb-3">
                                <input type="text" id="telefone" className="form-control" value="90000-4333"/>
                            </div>
                            <div className="col-12 d-flex justify-content-between">
                                <div className="mb-3 form-check col-6">
                                    <input type="checkbox" className="form-check-input custom-check" id="whatsapp"/>
                                    <label className="form-check-label label-check-custom" for="whatsapp">Receber notificações por Whatsapp</label>
                                </div>
                                <button type="reset" className="btn-cancelar">Adicionar telefone</button>
                            </div>
                            {/* <!-- telefone fim  --> */}
                        </div>
                        <div className="row mt-3">
                            {/* <!-- senha inicio  --> */}
                            <h4>Trocar de Senha</h4>
                            <div className="col-12 col-md-6 mb-3 mt-3">
                                <label for="senha" className="form-label custom-label">Senha atual<span className="obrigatorio">*</span></label>
                                <input type="text" id="senha" className="form-control" placeholder="Digite sua senha" required/>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6 mb-3">
                                    <label for="senha" className="form-label custom-label">Nova senha</label>
                                    <input type="text" id="senha" className="form-control" placeholder="Digite sua senha" required/>
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <label for="confirmar-senha" className="form-label custom-label">Confirme sua senha</label>
                                    <input type="text" id="confirmar-senha" className="form-control" placeholder="Digite novamente sua senha" required/>
                                </div>
                            </div>
                        </div>
                        {/* <!-- senha fim  --> */}
                        {/* <!-- checkbox inicio  --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input custom-check" id="dados" checked/>
                                    <label className="form-check-label label-check-custom" for="dados">Compartilhar meus dados com parceiros</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input custom-check" id="novidades-email"/>
                                    <label className="form-check-label label-check-custom" for="novidades-email">Receber novidades por email</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input custom-check" id="novidades-sms"/>
                                    <label className="form-check-label label-check-custom" for="novidades-sms">Receber novidades por SMS</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input custom-check" id="ligacoes"/>
                                    <label className="form-check-label label-check-custom" for="ligacoes">Receber ligações telefônicas</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input custom-check" id="mala-direta"/>
                                    <label className="form-check-label label-check-custom" for="mala-direta">Receber mala direta</label>
                                </div>
                                <p className="mt-3"><span className="obrigatorio">*</span>Campos obrigatórios</p>
                            </div>
                        </div>
                        {/* <!-- checkbox fim  --> */}
                        {/* <!-- BOTÕES inicio  --> */}
                        <div className="row my-3">
                            <div className="col-12 d-flex justify-content-end">
                                <button type="reset" className="btn-cancelar mx-2">Cancelar</button>
                                <button type="submit" className="btn-principal">Confirmar</button>
                            </div>
                        </div>
                    {/* <!-- BOTÕES fim  --> */}
                    
                </form>
                
            </div>
            {/* <!-- FORM FIM  --> */}
        </>
    )
}

export default UserForm