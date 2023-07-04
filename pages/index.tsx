import React from 'react'
import { PrismaClient } from '@prisma/client'

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()
  const usuarios = await prisma.usuarios.findMany()
  return { props: { usuarios } }
}
const Home = ({
  usuarios
}) => {
  return (
    <ul> 
    {usuarios.map(usuario => (
      <li className="w-screen flex justify-center items-center" key={usuario.id}>{usuario.name} - {usuario.lastname} - {usuario.email}</li>
      ))}
  </ul>
  )
}

export default Home