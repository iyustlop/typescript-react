import { render, screen }from '@testing-library/react'
import Form from './Form';
import { Sub } from "../types"

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

test('render Form', () => {

    // render(<Form onNewSub={onNewSub: Form} />)

    // expect(container.querySelector('form')).toEqual("hola")
})
