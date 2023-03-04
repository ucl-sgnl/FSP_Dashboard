import './App.css';
import { ColorModeContext, UseMode} from './theme';
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './scenes/global/TopBar';
import SideBar from './scenes/global/SideBar';
import Dashboard from './scenes/dashboard';
import Boxscore from './scenes/Boxscore';
import Catalogue from './scenes/catalogue';
import EnlargedItem from './scenes/enlargeditem';
import Globe from './scenes/globe';
import FAQ from './scenes/faq';
import { BarChart } from '@mui/icons-material';


function App() {
    const [theme, colorMode] = UseMode();
     
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SideBar/>
                    <main className='content'>
                        <TopBar/>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/boxscore" element={<Boxscore />} />
                            <Route path="/catalogue" element={<Catalogue />}  />
                            <Route path="/globe" element={<Globe />} />
                            <Route path="/enlarger/:graph" element={<EnlargedItem />} />
                            <Route path="/faq" element={<FAQ />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App;