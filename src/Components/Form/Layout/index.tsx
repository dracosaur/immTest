import { IFormLayout } from "../data";
import S from "./styles";
import { smartphones, yesOrNot, linguage, states } from "../data";

export const Form = ({ data }: IFormLayout) => (
<S.Container>
    <S.HeaderContainer>
        <S.HeaderText>Você está se candidatando para o cargo</S.HeaderText>
        <S.HeaderTitle>Profissional de Tradução</S.HeaderTitle>
        <S.HeaderSubtitle>Para se candidatar para essa posição, por favor, preencha o formulario abaixo.</S.HeaderSubtitle>
    </S.HeaderContainer>
    <S.FormContainer>
        <S.FormContent>
            <S.Label>Selecione seu estado</S.Label>
            <S.Select>
            {
                states?.map(({id, name, value}) => (
                 <option value={value}>{name}</option>
                )
                )
            }
            </S.Select>
        </S.FormContent>
        <S.FormContent>
            <S.Label>Você possui conexão com a internet </S.Label>
            {
                yesOrNot?.map(({id, name}) => (
                    <S.ButtonContainer>
                        <S.Button type="checkbox" width="12px" height="12px" />
                        <S.ButtonText>{name}</S.ButtonText>
                    </S.ButtonContainer>
                )
                )
            }
        </S.FormContent>
        <S.FormContent>
            <S.Label>Você possui algum celular smartphone, tablet, computador ou notebook?</S.Label>
            {
                smartphones?.map(({id, name}) => (
                    <S.ButtonContainer>
                        <S.Button type="checkbox" width="12px" height="12px" />
                        <S.ButtonText>{name}</S.ButtonText>
                    </S.ButtonContainer>
                )
                )
            }
        </S.FormContent>
        <S.FormContent>
            <S.Label>Quantas horas por semana você tem disponível?</S.Label>
            <S.Button type="text" width="200px" height="30px"/>
        </S.FormContent>
        <S.FormContent>
            <S.Label>Qual língua você possui mais facilidade</S.Label>
            {
                linguage?.map(({id, name}) => (
                    <S.ButtonContainer>
                        <S.Button type="checkbox" width="12px" height="12px" />
                        <S.ButtonText>{name}</S.ButtonText>
                    </S.ButtonContainer>
                )
                )
            }
        </S.FormContent>
    </S.FormContainer>
    <S.FooterContainer>
        <S.CredentialsButtons>
            <S.Button type="text" placeholder="Digite seu nome" width="calc(100% - 32px)" height="30px"/>
            <S.Button type="text" placeholder="Digite seu e-mail" width="calc(100% - 32px)" height="30px"/>
            <S.Button type="number" placeholder="Digite seu telefone com DDD" width="calc(100% - 32px)" height="30px"/>
        </S.CredentialsButtons>
        <S.SubmitButton type="submit">ENVIAR</S.SubmitButton>
    </S.FooterContainer>
</S.Container>
);
