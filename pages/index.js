import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import {AlurakutMenu, OrkutNostalgicIconSet} from '../src/lib/AlurakutCommons';
import {ProfileRelationsBoxWrapper} from '../src/components/ProfileRelations'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `


function ProfileSideBar(propriedades){
  return (
    <Box>
    <img src={`https://github.com/${propriedades.githubUser}.png`} style={{borderRadius: '8px'}}/>
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'Thiteago';
  const pessoasFavoritas = ['Luizgpp', 'LucasSilvaDosSantos', 'marcobrunodev', 'J-AugustoManzano', 'barbarabizinoto', 'Jessysnt'];



  return (
    <>
    <AlurakutMenu></AlurakutMenu>
    <MainGrid>
      <div className="profileArea" style={{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={usuarioAleatorio}/>
      </div>

      <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
          <h1 className="title">
            Bem-Vindo(a)
          </h1>
          <OrkutNostalgicIconSet></OrkutNostalgicIconSet>
        </Box>
      </div>
      
      <div className="profileRelationArea" style={{gridArea: 'profileRelationArea'}}>
        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
          
          <ul>
            {pessoasFavoritas.map((itemAtual) => {
              return (
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>
                </a>
                </li>

              )
              })}
          </ul>
        </ProfileRelationsBoxWrapper>
      </div>
    </MainGrid>
    </>
  )
}
