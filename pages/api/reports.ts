// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ReportType, { ReportInput } from '../../components/projects/reports/models'

type Data = {
    name: string
}

const writeOut = (doc: any, text: string, size: number, align?: string, moveDown?: number, bold?: boolean) => {
    doc.fontSize(size)
    doc.font(bold ? 'Helvetica-Bold' : 'Helvetica')
        .text(text, {
            align: align || 'center',
        })
    if (moveDown) {
        doc.moveDown(moveDown);
    }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.debug(req.body)
    const body = req.body as ReportInput[];
}
