import React from 'react';
import { BtnPost, ContentNewPost, Form, InputTitle, InputText } from './Styled'

const CreateNewPost = (props) => {

    return ( 
        <ContentNewPost>
            <img src={"https://api.adorable.io/avatars/50/abott@adorable.png"} alt="Fulano"/>
            <Form onSubmit={props.submit}>
                <InputTitle 
                    placeholder={'Título'}
                    name={"title"}
                    value={props.titleValue}
                    onChange={props.onChangeTitle}
                    type="text"
                    required
                />
                <InputText 
                    placeholder={'Postagem'}
                    name={"text"}
                    value={props.textValue}
                    onChange={props.onChangeText}
                    type="text"
                    required
                />
                <BtnPost>Postar</BtnPost>
            </Form>
        </ContentNewPost> 
    );
}
 
export default CreateNewPost;