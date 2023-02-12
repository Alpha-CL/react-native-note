import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Router from "./components/router";
import route from "./conf/route";
// import PropTypes from "prop-types";

const App = (props) => {
	
	return (
		<SafeAreaView style={styles.app}>
			{/*<Text>app</Text>*/}
			<Router config={route}/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	app: {
		flex: 1,
	},
	content: {}
});

App.defaultProps = {};
App.propTypes = {};

export default App;
