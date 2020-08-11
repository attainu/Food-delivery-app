import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Button, FormControl } from 'react-bootstrap';
import styles from './Home.module.css';

class Menusearch extends Component {
    state = {
        query: '',
        redirect: false
    }

    redirect() {
        if (this.state.redirect) {
            let route = `/recipes/${this.state.query}`
            return <Redirect push to={route} />
        }
    }

    onsubmit(e) {
        e.preventDefault();
        this.setState({ redirect: true })
    }

    render() {
        return (
            <section className={styles['container']}>
                {this.redirect()}
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2 w-75"
                        onChange={(e) => this.setState({ query: e.target.value })} />
                    <Link to="/profile"> <Button variant="outline-success" onClick={() => this.setState({ redirect: true })}>Search</Button></Link>
                </Form>
            </section>
        )
    }
}

export default Menusearch;