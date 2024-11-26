import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <Box>
            {/* header */}
            <Box>
                Header
            </Box>
            {/* content */}
            <Box>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Mainlayout;