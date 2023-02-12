import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import PropTypes from "prop-types";

const Demo = (props) => {
	
	return (
		<View style={styles.demo}>
			<View style={styles.content}>
				<Text>demo page</Text>
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

Demo.defaultProps = {};
Demo.propTypes = {};

export default Demo;
