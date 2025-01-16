import React, { useState, useCallback } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import useActions from '../../../../hooks/useActions';

const AddUrlModal = ({ showModal, closeModal }) => {
  const { createUrl } = useActions();
  const [urlData, setUrlData] = useState({ url: '', description: '' });

  const handleAddUrl = useCallback(async () => {
    const result = await createUrl(urlData);
    if (result.success) {
      setUrlData({ url: '', description: '' });
      closeModal();
    } else {
      toast.error(result.message);
    }
  }, [urlData, createUrl, closeModal]);

  return (
    <Modal open={showModal} onClose={closeModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          Add New URL
        </Typography>
        <TextField
          fullWidth
          label="URL"
          variant="outlined"
          margin="normal"
          value={urlData.url}
          onChange={(e) => setUrlData((prev) => ({ ...prev, url: e.target.value }))}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          value={urlData.description}
          onChange={(e) => setUrlData((prev) => ({ ...prev, description: e.target.value }))}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" color="inherit" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddUrl}>
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddUrlModal;
