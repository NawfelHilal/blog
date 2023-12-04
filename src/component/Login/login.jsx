import React from 'react'

export default function Login() {
    return (
        <div className="login-page">
        <h2>Connexion</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Adresse e-mail :</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe :</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
    );
}