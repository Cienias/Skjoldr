import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Clans from "../data/Clans";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Fade from "react-bootstrap/Fade";

function Randomizer() {
    const [clan_data, setClanData] = useState([{}]);
    const [clans, setClans] = useState(null);
    const [selected_clan, setSelectedClan] = useState({ name: "", norse: "", icon: "", image: "", selected: true });
    const [show_selected, setShowSelected] = useState(false);

    function OnClanClick(key: any) {
        const new_data = clan_data.map((clan: any, index: any) => {
            if (index === key) {
                clan.selected = !clan.selected;
                return clan;
            } else {
                return clan;
            }
        });
        setClanData(new_data);
    }

    function OnChooseClick() {
        setShowSelected(false);
        const selected_clans: any = clan_data.filter((clan: any) => clan.selected);
        const clan_id = Math.floor(Math.random() * selected_clans.length);
        if (selected_clans[clan_id]) {
            setSelectedClan(selected_clans[clan_id]);
            setShowSelected(true);
        }
    }

    useEffect(() => {
        let clans: Object[] = Clans;
        setClanData(clans);
    }, []);

    useEffect(() => {
        var clan_list: any = clan_data;
        setClans(clan_list.map((clan: any, key: any) =>
            <Col key={key}>
                <Image className={clan.selected ? "light" : "dark"} onClick={() => OnClanClick(key)} src={clan.icon} width={80} />
            </Col>));
    }, [clan_data]);

    return (
        <Container>
            <Row className="justify-content-md-center">
                {clans}
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <Button size="lg" onClick={OnChooseClick}>Choose</Button>

                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Fade in={show_selected}>
                    <div>
                        <Image src={selected_clan.image} />
                        <br></br>
                        {selected_clan.norse} - clan of the {selected_clan.name}
                    </div>
                </Fade>
            </Row>
        </Container>
    )
}

export default Randomizer;