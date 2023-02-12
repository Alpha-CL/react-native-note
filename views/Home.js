import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import PropTypes from "prop-types";

const Home = (props) => {
	
	return (
		<View style={styles.demo}>
			<View style={styles.content}>
				<Text>home page</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	demo: {
		flex: 1,
	},
	content: {}
});

Home.defaultProps = {};
Home.propTypes = {};

export default Home;
