// export default function Hello({nome}: any) {

//     const visitante = "Visitante";

//     return (
//         <h1>Hello {nome || visitante}</h1>
//     )
// }

export default function Hello({nome}: any) {

    const visitante = "Visitante";

    return (
        (nome) 
            ? <h1>Hello {nome}</h1>
            : <h1>Hello {visitante}</h1>
    )
}
