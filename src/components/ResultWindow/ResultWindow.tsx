import { Button, Col, Row, Typography } from "antd";
import React, {JSX} from "react";

const { Title } = Typography;

const ResultWindow = (): JSX.Element => {
    const Star = ({ style }: { style: React.CSSProperties }) => (<svg style={{
        width: 124,
        height: 118,
        position: "absolute",
        ...style
    }} viewBox="0 0 124 118" version="1.1" xmlns="http://www.w3.org/2000/svg" ><path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0" d="M 0 0 L 60.5 0 L 61 2.5 L 48 42.5 L 46.5 44 L 0 44 L 0 0 Z " /><path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0" d="M 63 0 L 124 0 L 124 44 L 77.5 44 L 76 42.5 L 63 0 Z " /><path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0" d="M 0.5 46 L 37 72.5 L 37 76.5 L 24 113.5 L 24 116.5 L 22.5 118 L 0.5 118 L 0 117.5 L 0.5 46 Z " /><path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0" d="M 123.5 46 L 124 118 L 101.5 118 L 100 116.5 L 100 113.5 L 87 76.5 L 87 72.5 L 123.5 46 Z " /><path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0" d="M 61.5 91 L 99 117.5 L 25.5 118 L 26.5 116 L 61.5 91 Z " /><path fill="rgb(255,225,7)" stroke="rgb(255,225,7)" stroke-width="1" opacity="0.3764705882352941" d="M 61 0 Q 64 -1 63 2 Q 60 3 61 0 Z " /><path fill="rgb(255,225,7)" stroke="rgb(255,225,7)" stroke-width="1" opacity="0.3764705882352941" d="M 56.5 15 L 57 17.5 L 50.5 36 L 50 33.5 L 56.5 15 Z " /><path fill="rgb(255,225,7)" stroke="rgb(255,225,7)" stroke-width="1" opacity="0.3764705882352941" d="M 67.5 15 L 74 35.5 L 73 35.5 L 67 17.5 L 67.5 15 Z " /><path fill="rgb(255,225,7)" stroke="rgb(255,225,7)" stroke-width="1" opacity="0.3764705882352941" d="M 47.5 43 L 48 45 L 1 45.5 L 38 72.5 L 37.5 76 L 35.5 71 L 0 45.5 L 0.5 44 L 46.5 44 L 47.5 43 Z " /><path fill="rgb(255,225,7)" stroke="rgb(255,225,7)" stroke-width="1" opacity="0.3764705882352941" d="M 76.5 43 L 77.5 44 L 124 44 L 122.5 47 L 87 72.5 L 86.5 76 L 86 72.5 L 123 45.5 L 76 45 L 76.5 43 Z " /><path fill="rgb(255,225,7)" stroke="rgb(255,225,7)" stroke-width="1" opacity="0.3764705882352941" d="M 61.5 90 L 98.5 116 L 99 113.5 L 93 95.5 L 94 95.5 L 100 115.5 L 99.5 117 L 101 117.5 L 99.5 118 L 61.5 91 L 23.5 118 L 23.5 117 L 25 116.5 L 24 113.5 L 30.5 95 L 31 97.5 L 25 115.5 L 26.5 115 L 61.5 90 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 4.5 47 L 5.5 49 L 4.5 47 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 119.5 47 L 118.5 49 L 119.5 47 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 7.5 49 L 8.5 51 L 7.5 49 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 116.5 49 L 115.5 51 L 116.5 49 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 11.5 52 L 12.5 54 L 11.5 52 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 112.5 52 L 111.5 54 L 112.5 52 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 15.5 55 L 16.5 57 L 15.5 55 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 108.5 55 L 107.5 57 L 108.5 55 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 18.5 57 L 19.5 59 L 18.5 57 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 105.5 57 L 104.5 59 L 105.5 57 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 22.5 60 L 23.5 62 L 22.5 60 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 101.5 60 L 100.5 62 L 101.5 60 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 26.5 63 L 27.5 65 L 26.5 63 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 97.5 63 L 96.5 65 L 97.5 63 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 29.5 65 L 30.5 67 L 29.5 65 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 94.5 65 L 93.5 67 L 94.5 65 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 33.5 68 L 34.5 70 L 33.5 68 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 90.5 68 L 89.5 70 L 90.5 68 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 36.5 70 L 39 73.5 L 38 73.5 L 36.5 70 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 87.5 70 L 86 72.5 L 85.5 74 L 85 72.5 L 87.5 70 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 61.5 89 L 64 90.5 L 62.5 90 L 60.5 91 L 61.5 89 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 57.5 92 L 56.5 94 L 57.5 92 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 66.5 92 L 67.5 94 L 66.5 92 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 54.5 94 L 52.5 97 L 54.5 94 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 69.5 94 L 71.5 97 L 69.5 94 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 50.5 97 L 49.5 99 L 50.5 97 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 73.5 97 L 74.5 99 L 73.5 97 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 46.5 100 L 45.5 102 L 46.5 100 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 77.5 100 L 78.5 102 L 77.5 100 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 43.5 102 L 41.5 105 L 43.5 102 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 80.5 102 L 82.5 105 L 80.5 102 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 39.5 105 L 38.5 107 L 39.5 105 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 84.5 105 L 85.5 107 L 84.5 105 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 35.5 108 L 34.5 110 L 35.5 108 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 88.5 108 L 89.5 110 L 88.5 108 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 32.5 110 L 30.5 113 L 32.5 110 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 91.5 110 L 93.5 113 L 91.5 110 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 28.5 113 L 27.5 115 L 28.5 113 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="0.996078431372549" d="M 95.5 113 L 96.5 115 L 95.5 113 Z " /><path fill="rgb(255,226,8)" stroke="rgb(255,226,8)" stroke-width="1" opacity="1" d="M 61 3 Q 64.3 1.7 63 6.5 L 76 45 L 122 45.5 L 85 72.5 L 99 115.5 L 95.5 113 L 61.5 89 L 25.5 116 L 25 114.5 L 39 72.5 L 2 45.5 L 48 45 L 61 6.5 L 61 3 Z " /></svg>);
    return (
        <Row justify="center" className="bg-white w-full">
            <Col
                className="bg-white"
                style={{width: 1280, height: 650, position: "relative"}}
            >
                <svg style={{
                    width: 200,
                    height: 200,
                    position: "absolute",
                    top: 165,
                    left: 540,
                    objectFit: "cover",
                }} viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 110.5 12 L 111.5 14 L 110.5 12 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 143.5 16 L 146 17.5 L 144.5 17 L 143.5 16 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 37.5 44 L 40 44.5 L 37.5 45 L 37.5 44 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 48.5 44 L 51 44.5 L 48.5 45 L 48.5 44 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 149.5 44 L 152 44.5 L 149.5 45 L 149.5 44 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 160.5 44 L 163 44.5 L 160.5 45 L 160.5 44 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 10.5 75 L 11 87.5 L 10 87.5 L 10.5 75 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 189.5 75 L 190 87.5 L 189 87.5 L 189.5 75 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 12.5 119 L 13 123.5 L 12 123.5 L 12.5 119 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 187.5 119 L 188 123.5 L 187 123.5 L 187.5 119 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 187.5 126 L 188 130.5 L 187 130.5 L 187.5 126 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 12.5 127 L 13 130.5 L 12 130.5 L 12.5 127 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 17.5 142 L 18 150.5 L 17 150.5 L 17.5 142 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 182.5 142 L 183 150.5 L 182 150.5 L 182.5 142 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 175.5 168 L 174.5 170 L 175.5 168 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 172.5 172 L 166.5 179 L 172.5 172 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 28.5 173 L 32.5 178 L 28.5 173 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 37.5 181 L 38.5 183 L 37.5 181 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 162.5 181 L 161.5 183 L 162.5 181 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 77.5 198 L 80 198.5 L 77.5 199 L 77.5 198 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 83.5 199 L 90 199.5 L 83.5 200 L 83.5 199 Z "/>
                    <path fill="rgb(65,96,59)" stroke="rgb(65,96,59)" stroke-width="1" opacity="0.09019607843137255"
                          d="M 110.5 199 L 114 199.5 L 110.5 200 L 110.5 199 Z "/>
                    <path fill="rgb(254,225,99)" stroke="rgb(254,225,99)" stroke-width="1" opacity="0.9882352941176471"
                          d="M 98.5 0 L 100 0.5 L 100 66 L 78.5 68 Q 73.4 57.6 64.5 51 L 60 49 L 52 21.5 L 53 18 Q 55.4 16.3 61.5 17 L 82 27 L 95 1 L 98.5 0 Z "/>
                    <path fill="rgb(254,225,99)" stroke="rgb(254,225,99)" stroke-width="1" opacity="0.9882352941176471"
                          d="M 103.5 1 L 104.5 3 L 103.5 1 Z "/>
                    <path fill="rgb(254,225,99)" stroke="rgb(254,225,99)" stroke-width="1" opacity="0.9882352941176471"
                          d="M 107.5 8 L 108.5 10 L 107.5 8 Z "/>
                    <path fill="rgb(254,225,99)" stroke="rgb(254,225,99)" stroke-width="1" opacity="0.9882352941176471"
                          d="M 144.5 17 L 146.5 20 L 144.5 17 Z "/>
                    <path fill="rgb(247,189,44)" stroke="rgb(247,189,44)" stroke-width="1" opacity="0.9764705882352941"
                          d="M 100 0 Q 103.7 -1.5 103 1.5 L 106 3.5 L 105.5 5 L 107 5.5 L 106.5 7 L 108 7.5 Q 105.5 9 109 10.5 L 110 14 L 112 14.5 L 111.5 16 L 113 16.5 L 112.5 18 L 114 18.5 L 113.5 20 L 116 21.5 L 115.5 23 L 117 23.5 L 116.5 25 L 118 25.5 L 117.5 27 L 119.5 28 L 120.5 26 L 122 26.5 L 122.5 25 L 124 25.5 L 124.5 24 L 126 24.5 L 126.5 23 L 128 23.5 L 128.5 22 L 130 22.5 L 130.5 21 L 132 21.5 L 132.5 20 L 134 20.5 L 134.5 19 L 136 19.5 L 136.5 18 L 138 18.5 L 138.5 17 L 140 17.5 Q 139.2 14.9 142.5 16 Q 144.8 20.3 147 18.5 L 146.5 20 Q 148.8 19.3 148 21.5 L 148 23.5 Q 148.8 25.8 146.5 25 L 147 26.5 L 145 29.5 L 145.5 31 L 144 31.5 L 145 33.5 L 142 38.5 L 143 40.5 L 141 41.5 L 142 44 Q 139.3 42.9 140 45.5 L 140 47.5 Q 140.8 49.8 138.5 49 L 126 60.5 L 121.5 68 L 100 66 L 100 0 Z "/>
                    <path fill="rgb(247,189,44)" stroke="rgb(247,189,44)" stroke-width="1" opacity="0.9764705882352941"
                          d="M 57.5 16 L 60 16.5 L 57.5 17 L 57.5 16 Z "/>
                    <path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0"
                          d="M 0 0 L 97 0.5 L 95 1 L 81.5 26 L 60.5 16 L 55.5 16 Q 50.5 17.5 52 25.5 L 59 47 L 50.5 44 L 37.5 44 Q 24.8 47.3 18 56.5 L 11 70.5 L 10 87.5 L 13 98.5 L 17 105.5 Q 10.8 114.3 12 130.5 L 14 137.5 L 17 141.5 L 17 150.5 L 21 163.5 L 32.5 178 Q 51.3 195.3 83 199.5 L 0 200 L 0 0 Z "/>
                    <path fill="rgb(0,0,0)" stroke="rgb(0,0,0)" stroke-width="1" opacity="0"
                          d="M 103.5 0 L 200 0 L 200 200 L 117 199.5 Q 153.8 194.8 173 172.5 Q 179.2 165.7 182 155.5 L 183 141.5 L 186 137.5 L 188 130.5 L 188 119.5 L 183 105.5 Q 191.3 95.3 190 75.5 Q 187 59.5 176.5 51 L 162.5 44 L 149.5 44 L 141 47 L 148 25.5 L 148 19.5 Q 146.8 14.8 139.5 16 L 120.5 26 L 118 26 L 105 1 L 103.5 0 Z "/>
                    <path fill="rgb(98,86,168)" stroke="rgb(98,86,168)" stroke-width="1" opacity="1"
                          d="M 44.5 74 L 50 76.5 L 51 81.5 L 48.5 85 L 43.5 86 L 40 83.5 L 39 78.5 L 44.5 74 Z "/>
                    <path fill="rgb(98,86,168)" stroke="rgb(98,86,168)" stroke-width="1" opacity="1"
                          d="M 153.5 74 L 157 74.5 L 153.5 75 L 153.5 74 Z "/>
                    <path fill="rgb(98,86,168)" stroke="rgb(98,86,168)" stroke-width="1" opacity="1"
                          d="M 151.5 75 L 150.5 77 L 151.5 75 Z "/>
                    <path fill="rgb(98,86,168)" stroke="rgb(98,86,168)" stroke-width="1" opacity="1"
                          d="M 159.5 83 L 158.5 85 L 159.5 83 Z "/>
                    <path fill="rgb(153,230,145)" stroke="rgb(153,230,145)" stroke-width="1"
                          opacity="0.8392156862745098" d="M 40.5 44 L 47 44.5 L 40.5 45 L 40.5 44 Z "/>
                    <path fill="rgb(153,230,145)" stroke="rgb(153,230,145)" stroke-width="1"
                          opacity="0.8392156862745098" d="M 26.5 49 L 25.5 51 L 26.5 49 Z "/>
                    <path fill="rgb(153,230,145)" stroke="rgb(153,230,145)" stroke-width="1"
                          opacity="0.8392156862745098" d="M 23.5 51 L 19.5 56 L 23.5 51 Z "/>
                    <path fill="rgb(153,230,145)" stroke="rgb(153,230,145)" stroke-width="1"
                          opacity="0.8392156862745098" d="M 18.5 57 L 17.5 59 L 18.5 57 Z "/>
                    <path fill="rgb(153,230,145)" stroke="rgb(153,230,145)" stroke-width="1"
                          opacity="0.8392156862745098" d="M 14.5 64 L 14 65.5 L 13.5 67 L 13 65.5 L 14.5 64 Z "/>
                    <path fill="rgb(153,230,145)" stroke="rgb(153,230,145)" stroke-width="1"
                          opacity="0.8392156862745098" d="M 15.5 101 L 17 103.5 L 15 102.5 L 15.5 101 Z "/>
                    <path fill="rgb(153,230,145)" stroke="rgb(153,230,145)" stroke-width="1"
                          opacity="0.8392156862745098" d="M 12.5 124 L 13 126.5 L 12 126.5 L 12.5 124 Z "/>
                    <path fill="rgb(153,230,145)" stroke="rgb(153,230,145)" stroke-width="1"
                          opacity="0.8392156862745098" d="M 15.5 138 L 16.5 140 L 15.5 138 Z "/>
                    <path fill="rgb(153,230,145)" stroke="rgb(153,230,145)" stroke-width="1"
                          opacity="0.8392156862745098" d="M 33.5 177 L 34.5 179 L 33.5 177 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 152.5 44 L 160 44.5 L 152.5 45 L 152.5 44 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 177.5 52 L 180.5 56 L 177.5 52 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 26.5 170 L 27.5 172 L 26.5 170 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 173.5 170 L 172.5 172 L 173.5 170 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 35.5 179 L 36.5 181 L 35.5 179 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 164.5 179 L 163.5 181 L 164.5 179 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 39.5 182 L 40.5 184 L 39.5 182 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 42.5 184 L 43.5 186 L 42.5 184 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 80.5 198 L 83 198.5 L 80.5 199 L 80.5 198 Z "/>
                    <path fill="rgb(95,193,143)" stroke="rgb(95,193,143)" stroke-width="1" opacity="0.796078431372549"
                          d="M 90.5 199 L 95 199.5 L 90.5 200 L 90.5 199 Z "/>
                    <path fill="rgb(73,65,133)" stroke="rgb(73,65,133)" stroke-width="1" opacity="0.9254901960784314"
                          d="M 152.5 75 Q 158.8 73.8 160 77.5 L 161 80.5 L 157.5 85 L 153.5 86 L 150 83.5 L 149 79.5 L 152.5 75 Z "/>
                    <path fill="rgb(155,225,131)" stroke="rgb(155,225,131)" stroke-width="1" opacity="1"
                          d="M 37.5 45 Q 64.5 44 74 60.5 L 78.5 68 L 100 66 L 100 169.5 Q 99.9 170.6 94.5 170 L 84.5 168 L 73.5 163 L 61.5 153 L 53.5 151 L 36.5 151 L 31.5 150 Q 22.9 148.1 18 142.5 L 13 131.5 L 13 118.5 L 18 105.5 Q 9.7 95.3 11 75.5 Q 14 59.5 24.5 51 L 37.5 45 Z M 44 74 L 42 75 L 39 79 Q 38 85 43 86 Q 50 87 51 83 L 50 77 Q 49 73 44 74 Z M 84 106 L 82 107 L 79 111 L 80 116 L 84 118 L 89 117 L 91 114 L 90 109 Q 89 105 84 106 Z "/>
                    <path fill="rgb(155,225,131)" stroke="rgb(155,225,131)" stroke-width="1" opacity="1"
                          d="M 175.5 51 L 176.5 53 L 175.5 51 Z "/>
                    <path fill="rgb(155,225,131)" stroke="rgb(155,225,131)" stroke-width="1" opacity="1"
                          d="M 102.5 66 L 109 66.5 L 102.5 67 L 102.5 66 Z "/>
                    <path fill="rgb(155,225,131)" stroke="rgb(155,225,131)" stroke-width="1" opacity="1"
                          d="M 29.5 173 L 31.5 176 L 29.5 173 Z "/>
                    <path fill="rgb(155,225,131)" stroke="rgb(155,225,131)" stroke-width="1" opacity="1"
                          d="M 37.5 180 L 38.5 182 L 37.5 180 Z "/>
                    <path fill="rgb(94,190,142)" stroke="rgb(94,190,142)" stroke-width="1" opacity="1"
                          d="M 149.5 45 Q 159.6 43.4 165.5 46 Q 175.4 49.1 181 56.5 Q 190.1 66.9 189 87.5 L 187 95.5 L 182 105.5 L 187 118.5 L 187 131.5 L 181 143.5 Q 183.2 144.8 182 149.5 L 181 149.5 L 180.5 144 L 172.5 149 L 164.5 151 L 146.5 151 L 141.5 152 Q 132.2 155.7 126.5 163 L 118.5 167 L 106.5 170 L 100 170 L 100 199.5 Q 100 200.5 95.5 200 L 94.5 199 L 77.5 198 L 62.5 194 L 48.5 188 L 32 177 L 24 166.5 L 20 158.5 L 18 151.5 L 18 143.5 L 19.5 144 L 31.5 150 L 58.5 152 Q 67.8 155.7 73.5 163 L 81.5 167 L 100 170 L 100 66.5 L 101.5 66 L 102.5 67 L 121.5 68 Q 126.6 57.6 135.5 51 L 149.5 45 Z M 154 74 L 152 75 L 149 79 L 150 84 L 154 86 L 159 85 Q 162 84 161 79 L 157 74 L 154 74 Z M 114 106 L 112 107 L 109 111 L 110 116 L 114 118 L 119 117 L 121 113 L 120 110 Q 119 105 114 106 Z "/>
                    <path fill="rgb(94,190,142)" stroke="rgb(94,190,142)" stroke-width="1" opacity="1"
                          d="M 41.5 75 L 40.5 77 L 41.5 75 Z "/>
                    <path fill="rgb(94,190,142)" stroke="rgb(94,190,142)" stroke-width="1" opacity="1"
                          d="M 83.5 106 Q 88.6 105.4 90 108.5 L 91 113.5 L 88.5 117 L 83.5 118 L 80 115.5 L 79 110.5 L 81.5 107 L 83.5 106 Z "/>
                    <path fill="rgb(94,190,142)" stroke="rgb(94,190,142)" stroke-width="1" opacity="1"
                          d="M 176.5 165 L 175.5 167 L 176.5 165 Z "/>
                    <path fill="rgb(94,190,142)" stroke="rgb(94,190,142)" stroke-width="1" opacity="1"
                          d="M 174.5 168 L 173.5 170 L 174.5 168 Z "/>
                    <path fill="rgb(94,190,142)" stroke="rgb(94,190,142)" stroke-width="1" opacity="1"
                          d="M 171.5 172 L 165.5 179 L 171.5 172 Z "/>
                    <path fill="rgb(94,190,142)" stroke="rgb(94,190,142)" stroke-width="1" opacity="1"
                          d="M 162.5 180 L 161.5 182 L 162.5 180 Z "/>
                    <path fill="rgb(94,190,142)" stroke="rgb(94,190,142)" stroke-width="1" opacity="1"
                          d="M 114.5 198 L 117 198.5 L 114.5 199 L 114.5 198 Z "/>
                    <path fill="rgb(44,154,120)" stroke="rgb(44,154,120)" stroke-width="1" opacity="0.9647058823529412"
                          d="M 113.5 106 Q 119.3 105.3 120 109.5 L 121 112.5 L 119 117 L 113.5 118 L 110 115.5 L 109 110.5 L 111.5 107 L 113.5 106 Z "/>
                    <path fill="rgb(44,154,120)" stroke="rgb(44,154,120)" stroke-width="1" opacity="0.9647058823529412"
                          d="M 181.5 143 L 181 144.5 L 182 153.5 Q 178.5 155 181 156.5 Q 181.7 159.1 179 158 L 179 160.5 L 178.5 163 L 177 163.5 L 177.5 165 L 175 166.5 Q 171.3 175.3 163.5 180 L 161 181.5 L 159.5 184 Q 158.3 181.8 157 184.5 L 156.5 186 L 155 185.5 L 154.5 187 L 152.5 187 L 147 189 L 146.5 191 L 145 190.5 Q 145.8 193.1 142.5 192 L 140 192.5 Q 140.8 194.8 138.5 194 L 137 193.5 L 136.5 195 L 134 194 Q 135.1 196.7 132.5 196 L 130.5 195 L 127.5 197 L 126 196.5 Q 126.8 198.8 124.5 198 L 121.5 197 Q 118.9 196.3 120 199 L 117.5 199 L 114.5 198 Q 109.3 201.4 100 200 L 100 170.5 Q 100.3 169.3 106.5 170 L 118.5 167 L 126.5 163 Q 132.2 155.7 141.5 152 L 146.5 151 L 164.5 151 L 172.5 149 L 181.5 143 Z "/>
                </svg>

                <Star style={{ top: "365px", left: "413px" }} />
                <Star style={{ top: "430px", left: "578px"}} />
                <Star style={{  top: "365px", left: "743px" }} />

                <Title
                    level={1}
                    style={{
                        width: 460,
                        height: 109,
                        position: "absolute",
                        top: 18,
                        left: 410,
                        fontFamily: "'Inter-Regular', Helvetica",
                        fontWeight: "normal",
                        color: "black",
                        fontSize: 40,
                        textAlign: "center",
                        margin: 0,
                    }}
                >
                    Результат:
                </Title>

                <Button
                    type="primary"
                    style={{
                        width: 258,
                        height: 136,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2.5px",
                        padding: "16px 32px",
                        position: "absolute",
                        top: 97,
                        left: 46,
                        backgroundColor: "#aaff98",
                        borderRadius: 30,
                        fontFamily: "'Inter-Regular', Helvetica",
                        fontWeight: "normal",
                        color: "black",
                        fontSize: 40,
                        textAlign: "center",
                        whiteSpace: "nowrap",
                    }}
                >
                    Статистика
                </Button>
            </Col>
        </Row>
    );
};

export default ResultWindow;
