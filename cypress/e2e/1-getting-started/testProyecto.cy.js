describe("testProyecto", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/frontend/index.html")
    })

    it("Validar si es visible el elemento de la clase .subtitle", () => {

        cy.get('.subtitle').should('be.visible')
    })


    it("Validar si el texto inicial es visible", () => {
        cy.get('a').should('be.visible').and('have.text', 'REGISTRAR ESCUELA')
    })



    it("Validar formulario de Referencia Tipos de Juego", () => {

        cy.get('a').click();
        cy.get('[href="ref_tipos_de_juegos.html"]').click();
        cy.get('#descripcionTipoJuego').type('Liga Portoviejo');
        cy.get('#tipoJuegoForm > button').click();

    })



    it("Validar boton eliminar de Referencia Tipos de Juego", () => {

        cy.get('a').click();
        cy.get('[href="ref_tipos_de_juegos.html"]').click();
        cy.get('[onclick="eliminarTipoJuego(34)"]').click(); //Cambiar el id

    })


    it('Editar la descripción del tipo de juego ', () => {
        cy.get('a').click();
        cy.get('[href="ref_tipos_de_juegos.html"]').click();
        cy.get('[onclick="editarTipoJuego(6)"]').click();
        cy.get('#descripcion').should('be.visible');  
        cy.get('#descripcion')
            .clear()
            .type('Eliminatoria');
        cy.get('#btnGuardar').click();
        cy.contains('td', 'Eliminatoria').should('exist');
    });



        it('Boton para seleccionar la fecha en el formulario de temporadas', () => {
        cy.get('a').click();
        cy.get('[href="temporadas.html"]').click();
        cy.get('#nombreTemporadaInput').type('Temporada 2024');
        cy.get('#idEscuela').type('13');
        cy.get('#fechaInicio').type('2024-01-01');
        cy.get('#fechaFinalizacion').type('2024-12-31');
        cy.get('#clasificacionFinal').type('Finalistas');
        cy.get('button').click();
    });


        it('Verficiar si el formulario para agergar estudiante funciona', () => {
        cy.get('a').click();
        cy.get('[href="estudiantes.html"]').click();
        cy.get('#estudiantesForm').should('be.visible');

    });


        it('Agregar una Posicion', () => {
        cy.get('a').click();
        cy.get('[href="ref_posiciones.html"]').click();
        cy.get('#descripcionPosicion').type('Lateral Derecho');
        cy.get('#posicionForm > button').click();
    });


        it('Verificar el boton de Titular', () => {
        cy.get('a').click();
        cy.get('[href="equipo.html"]').click();
        cy.get('#idJuego').type('1');
        cy.get('#idEstudiante').type('3');
        cy.get('#codigoPosicion').type('5');
        cy.get('button').click();
    });


        it('Agregar una esuela', () => {
        cy.get('a').click();
        cy.get('[href="escuelas.html"]').click();
        cy.get('#idEntrenador').type('10');
        cy.get('#codigoDistrito').type('7');
        cy.get('#idDireccion').type('5');
        cy.get('#nombreEscuela').type('El Oasis');
        cy.get('#mascota').type('Tigre');
        cy.get('#numeroTelefono').type('0987654321');
        cy.get('#estadioLocal').type('Estadio Municipal');
        cy.get('#otrosDetalles').type('Ninguno');
        cy.get('button').click();
    });


})