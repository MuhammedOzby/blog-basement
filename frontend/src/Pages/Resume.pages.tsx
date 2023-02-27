import React, { Component } from 'react';
import { ResumeSchema } from '../DTO/ResumeSchema.schema';

export interface User {
	userID: number;
	givenName: string;
	additionalName: string;
	familyName: string;
	email: string;
	image: null | string;
	jobTitle: string;
	telephone: string;
	url: string;
	resumeMarkDown: string;
	resume: null | ResumeSchema;
}

export default class ResumePages extends Component<{}, { userInfo?: User }> {
	constructor(props: object) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		fetch('/api/profile')
			.then((data) => data.json())
			.then((data) => this.setState({ ...this.state, userInfo: data }));
	}
	render() {
		return <></>;
	}
}
