const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');
const cors = require('./cors');

const Reservations = require('../models/reservations');

const reservationRouter = express.Router();
reservationRouter.use(bodyParser.json());

reservationRouter
  .route('/')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Reservations.find(req.query)
      .then(
        (reservations) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(reservations);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Reservations.remove({})
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

reservationRouter
  .route('/create-reservation')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Reservations.create(req.body)
      .then(
        (reservation) => {
          console.log('Reservation Created', reservation);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(reservation);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

reservationRouter
  .route('/:resId')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Reservations.findById(req.params.resId)
      .then(
        (reservation) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(reservation);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

reservationRouter
  .route('/edit-reservation/:resId')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Reservations.findByIdAndUpdate(
      req.params.resId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then(
        (reservation) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(reservation);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

reservationRouter
  .route('/delete-reservation/:resId')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Reservations.findByIdAndRemove(req.params.resId)
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = reservationRouter;
