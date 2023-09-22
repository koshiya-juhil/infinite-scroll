import React, { useEffect, useState } from 'react'
import { fetchItems } from './api'
// import axios from 'axios'
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import SkeletonComponent from './components/skeletonComponent';

// Define the BootstrapDialog using styled from Material-UI
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function Home() {

    const PAGE_LIMIT = 10
    const [PAGE_NO, setPAGE_NO] = useState(1)
    const [items, setItems] = useState([])
    const [nextPage, setNextPage] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const [error, setError] = useState(null)

    const [open, setOpen] = React.useState(false);

    // Function to open the modal and set the selected item
    const handleOpenModal = (item) => {
        setOpen(true)
        console.log(item.image)
        setSelectedItem(item)
    }

    // Function to close the modal and reset the selected item
    const handleClose = () => {
        setOpen(false)
        setSelectedItem({})
    }

    // Used an effect to load items when the page number changes
    useEffect(() => {
        async function runUseEffect() {
            setIsLoading(true)

            try {
                // Fetch items using the fetchItems function
                const res = await fetchItems(PAGE_NO, PAGE_LIMIT)
                setItems(items.concat(res.items))
                setNextPage(res.nextPage)
            } catch (error) {
                setError(error.message)
            }

            setIsLoading(false)
        }

        runUseEffect()
    }, [PAGE_NO])

    // Function to handle scroll events and load more items
    const handleOnScroll = async (e) => {
        let element = e.target

        // Check if the user has scrolled close to the bottom (within 100 pixels)
        if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 100) {
            if (nextPage && (PAGE_NO * PAGE_LIMIT === items.length)) {
                // If there's a next page and we haven't loaded all items, increment the page number to load more
                setPAGE_NO(PAGE_NO + 1)
            }
        }
    }

    return (
        <div>
            <nav>
                <div>Infinite Scroll</div>
            </nav>

            <section>

                <ul className='main-component' onScroll={(e) => handleOnScroll(e)}>
                    {
                        items.map((item) => (
                            <li className='item' key={item.id} onClick={() => handleOpenModal(item)}>
                                <img src={item.image} alt={item.name} className='item-img' />
                                <div className='details'>
                                    <h3 className='title' >{item.name}</h3>
                                    <p className='description'>{item.description}</p>
                                </div>
                            </li>
                        ))
                    }
                    {
                        isLoading ?
                            <>
                                {/* <div class="lds-ring"><div></div><div></div><div></div><div></div></div> */}
                                <SkeletonComponent />
                                <SkeletonComponent />
                            </>
                            : <></>
                    }
                    {error && <div>Error : {error}</div>}
                </ul>

            </section>


            <div>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        {selectedItem.name}
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <img src={`https://via.placeholder.com/570x300`} alt={selectedItem.name} />
                        <Typography gutterBottom>
                            {selectedItem.description}
                        </Typography>
                    </DialogContent>
                </BootstrapDialog>
            </div>

        </div>
    )
}



export default Home