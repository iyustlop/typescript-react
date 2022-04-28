import { render, screen }from '@testing-library/react'
import Form from './Form';
import { Sub } from "../types"

interface FormProps {
  onNewSub: (newSub: Sub) => void
}

test('render Form', () => {

  const testHandleSub = (newSub: Sub): void =>{

  }

    render(<Form onNewSub={testHandleSub} />);
    const formTest = screen.getByText(/Save new subs/);
    expect(formTest).toBeInTheDocument();
})
