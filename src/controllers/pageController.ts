import { Request, Response } from "express";

import { creatMenuObject } from '../helpers/creatMenuObject';

import {Pet} from '../models/pet'

export const home = (req: Request, res: Response) => {
  const list = Pet.getAll()

  res.render('pages/page', {
    menu: creatMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    },
    list
  })
}

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getDromType('dog')

  res.render('pages/page', {
    menu: creatMenuObject('dog'),
    banner: {
      title: 'Todos os cachorros',
      background: 'banner_dog.jpg'
    },
    list
  })
}

export const cats = (req: Request, res: Response) => {
  let list = Pet.getDromType('cat')

  res.render('pages/page', {
    menu: creatMenuObject('cat'),
    banner: {
      title: 'Todos os gatos',
      background: 'banner_cat.jpg'
    },
    list
  })
}

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getDromType('fish')

  res.render('pages/page', {
    menu: creatMenuObject('fish'),
    banner: {
      title: 'Todos os peixes',
      background: 'banner_fish.jpg'
    },
    list
  })
}