import React, {Component} from "react";
import {Text, View, ScrollView, SafeAreaView,Button} from "react-native";
import InputSpinner from "react-native-input-spinner";
import Styles from "../Styles/SurajStyles";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state={foodname:'',}
		let data = [];
		for (var i = 0; i < 10; i++) {
			data.push({
				key: String(i),
				value: Math.floor(Math.random() * 100) + 1,
			});
		}
		this.state = {
			value: 1,
			valueReal: 1.5,
			colorLeft: this.getRandomColor(),
			colorRight: this.getRandomColor(),
			data: data,
		};
	}

	getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	render() {
		return (
			<SafeAreaView style={Styles.mainContainer}>
				<ScrollView style={Styles.container}>
					<View style={Styles.col}>
						<Text value={this.state.foodname} onChangeText={foodname => this.setState({ foodname })} style={Styles.text}>Egg Roll</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Veg Roll</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Paneer Roll</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Chicken Roll</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Alu Parantha</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Paneer Parantha</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View style={Styles.col}>
						<Text style={Styles.text}>Gobhi Parantha</Text>
						<InputSpinner style={Styles.spinner} color={"#C4C4C4"}
							colorPress={"#F00"}
							buttonTextColor={"#000"}
							buttonPressTextColor={"#FFF"} placeholder={"Add"} />
					</View>
					<View>
						<Button title='Go to cart' onPress={() =>  
        					this.props.navigation.navigate('Cart', 
							{foodname: this.state.foodname})} 
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
