import styled from 'styled-components';

export const FormChangePasswordPageStyle = styled.section`
	
	min-height: 100vh;
	background-color: #101010;

	.title {
		color: #5EF629;
		text-shadow: 0px 0px 15px #5EF629;
	}

	.border {
    	border: 1px solid #EFA61D !important;
    	box-shadow: 0px 0px 15px #EFA61D;
    	width: 300px
    }

    .form-control, .form-control:focus {
    	background-color: transparent;
    }

    .form-control::placeholder {
    	color: #5EF629;
    	text-shadow: 0px 0px 5px #5EF629;
    }

    .btn, .btn:hover {
	    background-color: #ef0963;
	    color: white;
    }

    .btn:focus {
    	box-shadow: 0 0 2px 4px #f61b10;
    }
`;

export const IsFormStyled = styled.section`
    
    min-height: 100vh;
    background-color: #101010;
    
   .title {
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(90deg,#f61b10,#ef0963);
        background-clip: text;
   }
`;