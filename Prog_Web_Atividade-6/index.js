import React from 'react';

interface CustomInputProps {
  initialValue?: string;
  type?: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  initialValue = '',
  type = 'text',
  placeholder = '',
}) => {
  return (
    <input
      type={type}
      defaultValue={initialValue}
      placeholder={placeholder}
      style={{ color: 'red' }}
    />
  );
};

const FormComponent: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="nome">Name:</label>
        <CustomInput type="text" placeholder="Digite seu nome:" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <CustomInput type="email" placeholder="Digite seu email: " />
      </div>
      <div>
        <label htmlFor="telefone">Phone:</label>
        <CustomInput type="tel" placeholder="Digite seu numero de telefone: " />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Form</h1>
      <FormComponent />
    </div>
  );
};

export default App;