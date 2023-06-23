import React from 'react';

const Home = () => (
    <div style ={styles.container}>
        <h1 style={styles.title}> Приветсвенная страница сервиса</h1>
    </div>
);

const styles = {
    container: {
        minHeight: 'calculateNewValue(100vh-50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontWeight:500,
        fontSize: 48,
        textAlighn: 'center',
    }
}

export default Home;