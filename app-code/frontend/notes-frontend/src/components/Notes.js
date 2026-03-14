import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    TextField, Button, Typography, Container, Box, 
    Grid, Card, CardContent, Paper, Fade, Divider 
} from '@mui/material';

const Notes = () => {
    // Keep your original state management
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // Keep your original useEffect for fetching notes
    useEffect(() => {
        fetchNotes();
    }, []);

    // Keep your original GET logic
    const fetchNotes = async () => {
        try {
            const response = await axios.get('/api/notes/');
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    // Keep your original POST logic
    const addNote = async () => {
        if (title.trim() && content.trim()) {
            try {
                const response = await axios.post('/api/notes/', { title, content });
                setNotes([...notes, response.data]);
                setTitle('');
                setContent('');
            } catch (error) {
                console.error("Error adding note:", error);
            }
        }
    };

    return (
        <Box sx={{ 
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', // Premium Dark Theme
            minHeight: '100vh', 
            py: 8 
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    {/* Left Column: New Entry Form */}
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} sx={{ 
                            p: 4, 
                            borderRadius: 6, 
                            position: 'sticky', 
                            top: 40,
                            backgroundColor: 'rgba(30, 41, 59, 0.7)',
                            backdropFilter: 'blur(12px)', 
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            color: 'white'
                        }}>
                            <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, letterSpacing: '-0.5px' }}>
                                New Entry
                            </Typography>
                            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Note Title"
                                    variant="outlined"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' }},
                                        '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' }
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Write your thoughts..."
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' }},
                                        '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' }
                                    }}
                                />
                                <Button 
                                    variant="contained" 
                                    fullWidth
                                    onClick={addNote}
                                    sx={{ 
                                        py: 1.8, 
                                        borderRadius: 3, 
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        background: 'linear-gradient(90deg, #38bdf8, #818cf8)',
                                        fontSize: '1rem',
                                        '&:hover': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)' }
                                    }}
                                >
                                    Create Note
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Right Column: Grid of Dynamic Cards */}
                    <Grid item xs={12} md={8}>
                        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h4" sx={{ color: 'white', fontWeight: 900 }}>
                                Your Notes
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                                {notes.length} Total items
                            </Typography>
                        </Box>
                        
                        <Grid container spacing={3}>
                            {notes.map((note) => (
                                <Grid item xs={12} sm={6} key={note.id}>
                                    <Fade in={true}>
                                        <Card sx={{ 
                                            borderRadius: 5, 
                                            height: '100%', 
                                            bgcolor: '#1e293b', 
                                            color: 'white',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                            '&:hover': { 
                                                transform: 'translateY(-10px)', 
                                                borderColor: '#38bdf8',
                                                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)' 
                                            }
                                        }}>
                                            <CardContent sx={{ p: 3 }}>
                                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#38bdf8' }}>
                                                    {note.title}
                                                </Typography>
                                                <Divider sx={{ mb: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
                                                <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.8 }}>
                                                    {note.content}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Fade>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Notes;