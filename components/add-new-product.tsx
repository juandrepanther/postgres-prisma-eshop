import React, { useEffect, useState } from 'react'
import {
  Divider,
  Grid,
  Modal,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { IChange, ProductType, ProductCategory } from '@/lib/types'

import { calculateDiscountPercentage } from '@/lib/utils'
import { toast } from 'react-toastify'
import Check from './check'

interface Props {
  isOpenModal: boolean
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const initialValues = {
  id: 0,
  category: ProductCategory.SOFA,
  image: '',
  title: '',
  description: '',
  price: 0,
  isNew: false,
  discount: false,
  previousPrice: 0,
  outOfStock: false,
}

export default function AddNewProductModal({ isOpenModal, setIsOpenModal }: Props) {
  const [formData, setFormData] = useState<ProductType>(initialValues)
  const [formComplete, setFormComplete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isOpenCheckModal, setOpenCheckModal] = useState(false)

  const changeHandler = ({ event, of, isCheckbox }: IChange) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [of]: isCheckbox ? (event.target as HTMLInputElement).checked : event.target.value,
    }))
  }
  const handleClose = () => setIsOpenModal(false)

  useEffect(() => {
    if (formData.category && formData.image && formData.title && formData.price) {
      setFormComplete(true)
    } else {
      setFormComplete(false)
    }
  }, [formData])

  const openCheck = () => {
    setLoading(true)
    setOpenCheckModal(true)
  }

  return (
    <Modal
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mx: '2rem' }}
      open={isOpenModal}
      onClose={handleClose}
      disableScrollLock
    >
      <Paper component="form" elevation={6} sx={{ p: '2rem' }}>
        <Typography sx={{ fontWeight: 600, p: '1rem', fontSize: '1.5rem' }}>
          Enter the product data
        </Typography>

        <Divider variant="fullWidth" />

        <Grid spacing={3} container sx={{ my: '1rem' }}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="text"
              label="Product name"
              variant="outlined"
              required
              onChange={(e) => changeHandler({ event: e, of: 'title' })}
            />
            <TextField
              fullWidth
              required
              sx={{ my: '1rem' }}
              select
              label="Category"
              helperText="Please select new product category"
              defaultValue={ProductCategory.SOFA}
              onChange={(e) => changeHandler({ event: e, of: 'category' })}
            >
              {Object.values(ProductCategory).map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              multiline
              maxRows={5}
              type="area"
              placeholder="Product description"
              onChange={(e) => changeHandler({ event: e, of: 'description' })}
            ></TextField>
            <TextField
              fullWidth
              sx={{ my: '1rem' }}
              type="url"
              label="Image URL"
              variant="outlined"
              required
              onChange={(e) => changeHandler({ event: e, of: 'image' })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="number"
              required
              label="Price EUR"
              onChange={(e) => changeHandler({ event: e, of: 'price' })}
            />
            <TextField
              sx={{ my: '1rem' }}
              helperText="add if Discount is applied"
              fullWidth
              type="number"
              disabled={!formData.discount}
              label="Previous Price EUR"
              onChange={(e) => changeHandler({ event: e, of: 'previousPrice' })}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormGroup>
              <FormControlLabel
                label="New Product"
                control={
                  <Checkbox
                    onChange={(e) => changeHandler({ event: e, of: 'isNew', isCheckbox: true })}
                  />
                }
              ></FormControlLabel>
              <FormControlLabel
                label="Out Of Stock"
                control={
                  <Checkbox
                    onChange={(e) =>
                      changeHandler({ event: e, of: 'outOfStock', isCheckbox: true })
                    }
                  />
                }
              ></FormControlLabel>
              <FormControlLabel
                label="Discount"
                control={
                  <Checkbox
                    onChange={(e) => changeHandler({ event: e, of: 'discount', isCheckbox: true })}
                  />
                }
              ></FormControlLabel>
            </FormGroup>
          </Grid>
        </Grid>
        <LoadingButton
          loading={loading}
          disabled={!formComplete}
          variant="outlined"
          onClick={openCheck}
        >
          <span>{formComplete ? 'Create' : 'Form is not complete'}</span>
        </LoadingButton>
        <Check
          formData={formData}
          setLoading={setLoading}
          setOpenCheckModal={setOpenCheckModal}
          isOpenCheckModal={isOpenCheckModal}
          setIsOpenModal={setIsOpenModal}
        />
      </Paper>
    </Modal>
  )
}
