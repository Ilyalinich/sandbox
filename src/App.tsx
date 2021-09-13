import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  //Примитивы

  const int: number = 89;
  const message: string = `Learn React ${int}`;
  const numberArray: number[] = [1, 2, 3];
  const numberArray2: Array<number> = [4, 5]
  const stringArray: Array<string> = ['1', '2']

  // Tuple

  const contact: [string, number] = ['Vlad', 123456]

  //...

  let variable: any = 42
  variable = 'New string'

  function sayHello(name: string): void {
    console.log(name)
  }

  const sayMyName = (name: string): void => {
    console.log(name)
  }

  //Type

  type Login = string;
  const someLogin: Login = 'admin';

  type ID = string | number;
  const id1: ID = 1234;
  const id2: ID = '1234';

  type someType = string | null | undefined;
  const nothing: someType = null;

  //Interfaces

  interface Rect {
    readonly id: string
    color?: string
    size: {
      width: number
      height: number
    }
  }

  const rect: Rect = {
    id: '1234',
    size: {
      width: 20,
      height: 30
    },
    color: '#ccc'
  }

  const rect2: Rect = {
    id: '12345',
    size: {
      width: 10,
      height: 5
    },
  }
  // по-умолчанию пустой объект, но приравнен к типу Rect
  const rect3 = {} as Rect

  //============================

  //наследование интерфейсов

  interface RectWithArea extends Rect {
    getArea: () => number
  }

  const rect5: RectWithArea = {
    id: '123',
    size: {
      width: 20,
      height: 30,
    },
    getArea(): number {
      return this.size.width * this.size.height
    }
  }

  //==============================

  interface IClock {
    time: Date,
    setTime(date: Date): void
  }

  class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
      this.time = date;
    }
  }

  //===========================
  // у полей тип строка и у их заначений тип строка

  interface Styles {
    [key: string]: string
  }

  const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px',
  }

  // ================================
  // ENUM

  enum Membership {
    Simple,
    Standard,
    Premium
  }

  const membership = Membership.Standard
  // получим 1 - присваивается порядковый индекс
  console.log(membership)

  const membershipReverse = Membership[2]
  // получим Premium по индексу
  console.log(membershipReverse)


  enum SocialMedia {
    VK = 'Vkontakte',
    FACEBOOK = 'Facebook',
    INST = 'Instagram'
  }

  const social = SocialMedia.INST
  // 'Instagram'
  console.log(social)

  //===================
  // functions

  function add(a: number, b: number): number {
    return a + b
  }

  const add2 = (a: number, b: number): number => a + b;


  // interface MyPosition {
  //   х: number | undefined
  //   y: number | undefined
  // }

  // interface MyPositionWithDefault extends MyPosition {
  //   default: string
  // }

  // function position(): MyPosition
  // function position(a: number): MyPositionWithDefault
  // function position(a: number, b: number): MyPosition

  // function position(a?: number, b?: number) {
  //   if (!a && !b) {
  //     return {x: undefined, y: undefined}
  //   }
  //   if (a && !b) {
  //     return {x: a, y: undefined, default: a.toString()}
  //   }

  //   return {x: a, y: b}
  // }

  // console.log(position())


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message}
          {numberArray.join('')}
          {numberArray2}
          {stringArray}
          {contact.join(' ')}
          {variable}
          {sayMyName('Ilya')}
          {sayHello('chuvak')}
          {someLogin}
          {id1}
          {id2}
          {nothing}
        </a>
      </header>
    </div>
  );
}

export default App;
