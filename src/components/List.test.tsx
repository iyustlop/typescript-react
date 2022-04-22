import { render, screen }from '@testing-library/react'
import List from './List'
import { Sub } from "../types"


test('Check the List', () => {
    const sub: Sub[] = [{
        nick: "testUser",
        avatar: "http://avatar.com",
        subMonths: 5
    }]

    render(<List subs={sub}/>)
    const nick = screen.getByText(/testUser/i)
    expect(nick).toBeInTheDocument();
  });