import React from 'react'
import { render, fireEvent, getByText,waitFor } from "@testing-library/react";
import Perfil from "./Profile";

test('Comprobar que todo se renderiza correctamente', async () => {
   render(<Perfil/>);
});
