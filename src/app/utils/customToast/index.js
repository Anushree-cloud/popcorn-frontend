import { Cancel, CheckCircleOutline, ErrorOutline, Info, Report } from "@mui/icons-material";
import { Icon, IconButton, Snackbar, SnackbarContent, Typography } from "@mui/material";
import { amber, blue, green, red } from "@mui/material/colors";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideMessage } from "../../../hooks/useToast/store/toastSlice";


const classNameGenerator = (variant) => {
    switch(variant){
        case 'success':
            return {
                backgroundColor: green[600],
		        color: '#FFFFFF'
            }

        case 'error': 
            return {
                backgroundColor: red[500],
                color: '#FFFFFF'
            }  
            
        case 'info': 
            return {
                backgroundColor: blue[600],
                color: '#FFFFFF'
            } 
            
        case 'warning': 
            return {
                backgroundColor: amber[600],
                color: '#FFFFFF'
            }

		default: return	
    }
}

const variantIcon = {
	success: <CheckCircleOutline />,
	warning: <Report />,
	error: <ErrorOutline />,
	info: <Info />
};

function CustomToast(props) {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.message.state);
	const options = useSelector((state) => state.message.options);

	return (
		<>
		<Snackbar
			{...options}
			open={state}
			onClose={() => dispatch(hideMessage())}
			ContentProps={{
				variant: 'body2',
				headlineMapping: {
					body1: 'div',
					body2: 'div'
				}
			}}
		>
			<SnackbarContent
                sx={classNameGenerator(options.variant)}
				message={
					<div style={{display: 'flex', justifyContent: 'center'}}>
						{variantIcon[options.variant] && <>{variantIcon[options.variant]}</>}
						<Typography sx={{marginLeft: '5px'}}>{options.message}</Typography>
					</div>
				}
				action={[
					<IconButton key="close" aria-label="Close" color="inherit" onClick={() => dispatch(hideMessage())}>
						<Cancel />
					</IconButton>
				]}
			/>
		</Snackbar>
		</>
	);
}

export default memo(CustomToast);