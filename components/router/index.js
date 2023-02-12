import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

import StackNav from '../stackNav';
import TabNav from '../tabNav';
import TopTabNav from '../topTabNav';
import DrawerNav from '../drawerNav';
// import PropTypes from "prop-types";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
// const TopTab = createMaterialTopTabNavigator();
// const Drawer = createDrawerNavigator();

const createNavMethodMap = {
	stackNav: createNativeStackNavigator,
	tabNav: createBottomTabNavigator,
	topTabNav: createMaterialTopTabNavigator,
	drawerNav: createDrawerNavigator,
};

const NavCompMap = {
	stackNav: StackNav,
	tabNav: TabNav,
	topTabNav: TopTabNav,
	drawerNav: DrawerNav,
};

const navKeys = Object.keys(NavCompMap);

const defaultOptions = {
	headerShown: false
};

const defaultScreenOptions = {
	headerShown: false
};

const Router = (props) => {
	
	const {type, config, ...lastProps} = props;
	
	const createNavigator = (type) => {
		return navKeys.includes(type) ?
			createNavMethodMap[type]() :
			null;
	};
	
	const mixinOptions = (options = {}, defaultOptions = {}) => {
		const headerShown = !!(options && options.title);
		return Object.assign({},
			defaultOptions,
			options || {},
			{headerShown}
		);
	};
	
	const createNav = (navType, navConfig) => {
		if (!navType || !Array.isArray(navConfig)) return;
		const {Navigator: WrapperNavigator, Screen: WrapperScreen} = createNavigator(navType);
		let wrapperOptions = {};
		const GroupNavigator = navConfig.map((nav) => {
			const {name, component, type, children, ...lastNavProps} = nav;
			const options = mixinOptions(nav.options || {}, defaultOptions);
			if (name && type && Array.isArray(children) && !component) {
				wrapperOptions = nav.options || {};
				return (
					<WrapperScreen
						key={name}
						name={name}
						options={options}
						{...lastNavProps}
					>
						{() => (createNav(type, children))}
					</WrapperScreen>
				);
			} else {
				if (name && component) {
					return (
						<WrapperScreen
							key={name}
							name={name}
							options={options}
							component={component}
							{...lastNavProps}
						/>
					);
				}
			}
		});
		const screenOptions = mixinOptions(wrapperOptions || {}, defaultScreenOptions);
		return (
			<WrapperNavigator
				screenOptions={screenOptions}
				{...lastProps}
			>
				{GroupNavigator}
			</WrapperNavigator>
		);
	};
	
	return (
		<NavigationContainer style={styles.router}>
			{props.config && createNav(props.type || 'tabNav', props.config)}
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	router: {},
});

Router.defaultProps = {};
Router.propTypes = {};

export default React.memo(Router);
