import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as bcrypt from 'bcryptjs';
import { app } from '../app';
import Users from '../database/models/users';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testes do endpoint /login', () => {
  let chaiHttpResponse: Response;

  const userMock = {
    userResult: {
      "user": {
        "id": 1,
        "username": "Admin",
        "role": "admin",
        "email": "admin@admin.com",
      },
      "token": "string"
    }
  }

  before(async () => {
    sinon.stub(Users, 'findOne')
    .resolves(userMock.userResult as any)
    sinon.stub(bcrypt, 'compare')
    .resolves(true)
  })

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
    (bcrypt.compare as sinon.SinonStub).restore();
  })

  it('Verificar se o login foi realizado com sucesso com status 200', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({
      "email": "admin@admin.com",
      "password": "secret_admin"
    })

    expect(chaiHttpResponse.status).to.be.eq(200);
  })
})

describe('Testar email', async () => {
  let chaiHttpResponse: Response;

  const userMock = {
    userResult: {}
  }

  before(async () => {
    sinon.stub(Users, 'findOne')
    .resolves(userMock.userResult as any)
  })

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  })

  it('Verificar que não possível fazer login com email inválido', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({
      "email": "admin.com",
      "password": "secret_admin"
    })

  expect(chaiHttpResponse.status).to.be.eq(401)
  expect(chaiHttpResponse.body.message).to.be.eq("Incorrect email or password")
  })
})

describe('Testar password', async () => {
  let chaiHttpResponse: Response;

  const userMock = {
      userResult: {}
  }
  
  before(async () => {
    sinon.stub(Users, 'findOne')
    .resolves(userMock.userResult as any)
  })
  
  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  })

  it('Verificar que não é possível realizar login com password inválido', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({
      "email": "admin@admin.com",
      "password": "senha"
    })
  
    expect(chaiHttpResponse.status).to.be.eq(401)
    expect(chaiHttpResponse.body.message).to.be.eq("Incorrect email or password")
  })
})

describe('Testar se existe email', async () => {
  let chaiHttpResponse: Response;

  const userMock = {
      userResult: {}
  }
  
  before(async () => {
    sinon.stub(Users, 'findOne')
    .resolves(userMock.userResult as any)
  })
  
  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  })

  it('Ao tentar fazer o login sem um email retornará status não-autorizado', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({
      "password": "secret_admin"
    })
  
    expect(chaiHttpResponse.status).to.be.eq(401)
    expect(chaiHttpResponse.body.message).to.be.eq("All fields must be filled")
  })
})

describe('Testar se existe password', async () => {
  let chaiHttpResponse: Response;

  const userMock = {
      userResult: {}
  }
  
  before(async () => {
    sinon.stub(Users, 'findOne')
    .resolves(userMock.userResult as any)
  })
  
  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  })

  it('Ao tentar fazer o login sem um email retornará status não-autorizado', async () => {
    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send({
      "email": "admin@admin.com"
    })
  
    expect(chaiHttpResponse.status).to.be.eq(401)
    expect(chaiHttpResponse.body.message).to.be.eq("All fields must be filled")
  })
})