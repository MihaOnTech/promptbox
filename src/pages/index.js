import { Box, Container, Typography, Button } from "@mui/material";
import { useSession, signIn, signOut } from 'next-auth/react';

export default function IndexPage() {
  const { data: session, status } = useSession();
  if (status === 'loading'){
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Loading...</Typography>
      </Box>
    )
  }
  if (status === 'authenticated') {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            Welcome to PromptBox, {session.user.name}!
          </Typography>
          <Button
            variant="contained"
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </Container>
      </Box>
    );
  }
  return (
    <Box sx={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Container maxWidth="sm">
      <Button variant="contained" onClick={() => signIn('google')}>sign in with gooogle</Button>
      </Container>
    </Box>
  );
}


